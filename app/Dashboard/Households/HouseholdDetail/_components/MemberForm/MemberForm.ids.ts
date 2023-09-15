export const memberFormIds = {
  form: 'member-form',
  firstNameInput: 'member-first-name',
  lastNameInput: 'member-last-name',
  fatherNameInput: 'member-father-name',
  nationalityInput: 'member-nationality',
  nationalIdInput: 'member-nationalId',
  issuedAtInput: 'member-issuedAt',
  religionInput: 'member-religion',
  genderInput: 'member-gender',
  dobInput: 'member-date-of-birth',
  cityOfBirthInput: 'project-city-of-birth',
  submitBtn: 'submit-button',
  cancelBtn: 'cancel-button',
  editBtn: 'edit-button',
  deleteBtn: 'delete-button',
  notification: {
    delete: {
      success: 'delete-member-successful',
      failure: 'delete-member-failed',
    },
    edit: {
      success: 'edit-member-successful',
      failure: 'edit-member-failed',
    },
    create: {
      success: 'create-member-successful',
      failure: 'create-member-failed',
    },
  },
} as const;
