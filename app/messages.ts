import { type ServerError } from '@camp/domain';

export const errorMessages: Record<ServerError, string> = {
  INTERNAL_SERVER: 'خطا در ارتباط با سرور. لطفا دوباره تلاش کنید.',
  INVALID_CREDENTIALS: 'متاسفانه، کاربری با اطلاعات وارد شده یافت نشد.',
  UNKNOWN_ERROR: 'متاسفانه خطایی رخ داده است',
};

export const messages = {
  validation: {
    email: {
      required: 'این فیلد ضروری است',
      wrong: 'ایمیل وارد شده اشتباه هست',
    },
    password: {
      required: 'این فیلد ضروری است',
    },
    required: 'این فیلد ضروری است',
  },
  companyName: 'نامی مناسب برای خیریه',
  actions: { dismiss: 'انصراف', open: 'باز کردن' },
  families: {
    title: 'خانواده ها',
    create: 'ایجاد خانواده جدید',
    empty: {
      title: 'خانواده ای وجود ندارد!',
      description: 'متاسفانه لیست خانواده های شما خالی است.',
    },
    validation: {
      minLength: 'نام خانواده باید حداقل ۳ حرف باشد',
    },
    createForm: {
      nameInput: {
        placeholder: 'برای مثال: مرادی',
        label: 'نام',
        description:
          'نام مناسب برای خانواده می تواند نام خانوادگی سرپرست خانوار باشد',
      },
      submitBtn: {
        text: 'ایجاد خانواده',
      },
      notification: {
        failure: (name: string) =>
          `مشکلی در مرحله ایجاد خانواده ای با نام “${name}” بوجود آمده است. لطفا دوباره تلاش کنید.`,

        success: (name: string) =>
          `خانواده ای با نام “${name}” با موفقیت ایجاد شده است.`,
      },
    },
    informationStatus: {
      completed: 'تکمیل شده',
      draft: 'تکمیل نشده',
    },
    severityStatus: {
      critical: 'اضطراری',
      normal: 'عادی',
    },
    list: {
      title: 'لیست خانواده ها',
      table: {
        columns: ['ردیف', 'نام', 'وضعیت اطلاعات', 'وضعیت نیازمندی'],
      },
    },
  },
  projects: {
    title: 'پروژه ها',
    create: 'ایجاد پروژه جدید',
    validation: {
      minLength: 'نام پروژه باید حداقل ۳ حرف باشد',
    },
    notification: {
      successfulCreate: (name: string) =>
        `پروژه ای با نام "${name}" .با موفقیت ایجاد شده است`,
      failedCreate: (name: string) =>
        `مشکلی در مرحله ایجاد پروژه ای با نام "${name}" .بوجود آمده است. لطفا دوباره تلاش کنید`,
    },
    empty: {
      title: 'پروژه ای وجود ندارد!',
      description: 'متاسفانه لیست پروژه های شما خالی است.',
    },
    createForm: {
      nameInput: {
        placeholder: 'برای مثال: خرید مدرسه',
        label: 'نام',
      },
      descriptionInput: {
        placeholder: 'توضیحی درمورد پروژه',
        label: 'توضیحات',
      },
      submitBtn: {
        text: 'ایجاد پروژه',
      },
    },
    list: {
      title: 'لیست پروژه ها',
      table: {
        columns: ['ردیف', 'نام'],
      },
    },
  },
  householder: {
    householderIdentityForm: {
      nameInput: {
        label: 'نام',
        placeholder: 'برای مثال: محمد',
      },
      lastNameInput: {
        label: 'نام خانوادگی',
        placeholder: 'برای مثال: علیان',
      },
      fatherNameInput: {
        label: 'نام پدر',
        placeholder: 'برای مثال: محمد',
      },
      nationalityInput: {
        label: 'ملیت',
        placeholder: 'برای مثال: ایرانی',
      },
      nationalIdInput: {
        label: 'شماره کارت ملی',
        placeholder: 'برای مثال: ۰۱۲۳۴۵۶۷۸۹',
      },
      ssnInput: {
        label: 'شماره شناسنامه',
        placeholder: 'برای مثال: 12345678',
      },
      issuedAtInput: {
        label: 'محل صدور',
        placeholder: 'برای مثال: تهران',
      },
      religionInput: {
        label: 'دین',
        placeholder: 'برای مثال: اسلام',
      },
      genderInput: {
        label: 'جنسیت',
        placeholder: 'مرد/زن',
      },
      dateOfBirthInput: {
        label: 'تاریخ تولد',
        placeholder: 'برای مثال: ۱۳۹۹/۱۰/۱۰',
      },
      cityOfBirthInput: {
        label: 'شهر',
        placeholder: 'برای مثال: تهران',
      },
    },
  },
  login: {
    loginFrom: {
      title: 'به حساب کاربری خود وارد شوید',
      description: 'خوش آمدید، لطفا اطلاعات خود را وارد کنید.',
      emailInput: {
        label: 'ایمیل',
        placeholder: 'you@example.com',
      },
      passwordInput: {
        label: 'رمز عبور',
        placeholder: 'رمز عبور',
      },
      submitButton: {
        text: 'ورود',
      },
    },
  },
  familyDetail: {
    title: 'اطلاعات کلی خانواده',
    notFound: 'خانواده مورد نظر یافت نشد',
    familyFields: {
      name: {
        title: 'نام',
        value: 'فول استک زاده',
      },
      severityStatus: {
        title: 'وضعیت نیازمندی',
        value: 'بحرانی',
      },
      informationStatus: {
        title: 'وضعیت اطلاعات',
        value: 'تکمیل نشده',
      },
    },
  },
  logout: {
    link: 'خروج',
    modal: {
      title: 'خروج از حساب کاربری',
      confirmMessage: 'آیا می خواهید از حساب کاربری خود خارج شوید؟',
      accept: 'بله، خارج میشوم',
      cancel: 'انصراف',
    },
  },
} as const;
