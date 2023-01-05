import { Buffer } from 'buffer';

const clientId = Cypress.env('APP_AUTH0_CLIENT_ID');
const audience = Cypress.env('APP_AUTH0_AUDIENCE');
const domain = Cypress.env('APP_AUTH0_DOMAIN');
const scope = 'openid profile email read:current_user';
const url = `https://${domain}/oauth/token/`;

const extractUser = (token: string) => {
  const payload = token.split('.')[1];
  if (!payload) throw Error('Token does not exist');

  return JSON.parse(Buffer.from(payload, 'base64').toString('ascii'));
};

Cypress.Commands.add('login', ({ username, password }) => {
  Cypress.log({ name: 'LoginViaAuth0' });

  cy.session(username, () => {
    cy.request({
      method: 'POST',
      url,
      body: {
        grant_type: 'password',
        username,
        password,
        client_id: clientId,
        audience,
        scope,
      },
    })
      .then(resp => resp.body)
      // eslint-disable-next-line @typescript-eslint/naming-convention
      .then(({ access_token, expires_in, id_token, token_type }) => {
        const value = JSON.stringify({
          body: {
            client_id: clientId,
            access_token,
            id_token,
            scope,
            expires_in,
            token_type,
            decodedToken: { user: extractUser(id_token) },
            audience,
          },
          expiresAt: Math.floor(Date.now() / 1000) + expires_in,
        });

        window.localStorage.setItem(
          `@@auth0spajs@@::${clientId}::${audience}::${scope}`,
          value,
        );
      });
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      login: (args: { username: string; password: string }) => void;
    }
  }
}
