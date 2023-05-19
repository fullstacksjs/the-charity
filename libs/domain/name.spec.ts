import { describe, expect, it } from 'vitest';

import { Schema } from './Schema';

const forbiddenLetters =
  '؀؆؇؈؉؊؋،؍؎؏ؘؙؚؐؑؒؓؔؕؖؗ؛؜؝؞؟ػؼؽؾؿًٌٍَُِّْٕٖٜٟٓٔٗ٘ٙٚٛٝٞ٠١٢٣٤٥٦٧٨٩٪٫٬٭ٮٯٰٱٲٳٴٵٶٷٸٹٺٻټٽٿڀځڂڃڄڅڇڈډڊڋڌڍڎڏڐڑڒړڔڕږڗڙښڛڜڝڞڟڠڡڢڣڤڥڦڧڨڪګڬڭڮڰڱڲڳڴڵڶڷڸڹںڻڼڽھڿۀہۂۃۄۅۆۇۈۉۊۋۍێۏېۑےۓ۔ەۖۗۘۙۚۛۜ۝۞ۣ۟۠ۡۢۤۥۦۧۨ۩۪ۭ۫۬ۮۯ۰۱۲۳۴۵۶۷۸۹ۺۻۼ۽۾'.split(
    '',
  );

describe('name', () => {
  it('should pass if name is only persian letters', () => {
    expect(() => Schema.name().parse('نام')).not.toThrow();
  });

  it.each(forbiddenLetters)(
    'should throw if name has persian letters nad the symbol "%s"',
    s => {
      expect(() => Schema.name().parse(`نام${s}`)).toThrow();
    },
  );
});
