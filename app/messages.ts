import type { ServerError } from '@camp/domain';

export const errorMessages: Record<ServerError, string> = {
  INTERNAL_SERVER: 'خطا در ارتباط با سرور. لطفا دوباره تلاش کنید.',
  INVALID_CREDENTIALS: 'متاسفانه، کاربری با اطلاعات وارد شده یافت نشد.',
  UNKNOWN_ERROR: 'متاسفانه خطایی رخ داده است',
};

export const messages = {
  date: {
    format: (date: Date) => new Intl.DateTimeFormat('fa-IR').format(date),
  },
  validation: {
    dob: {
      max: 'تاریخ تولد نمی‌تواند آینده باشد',
    },
    email: {
      required: 'این فیلد ضروری است',
      wrong: 'ایمیل وارد شده اشتباه هست',
    },
    name: {
      invalid: 'لطفا یک نام معتبر وارد نمایید',
      minLength: 'نام سرپرست باید حداقل ۳ حرف باشد',
    },
    surname: {
      minLength: 'نام خانوادگی سرپرست باید حداقل ۳ حرف باشد',
    },
    nationalId: {
      length: 'شماره کارت ملی باید ۱۰ عدد باشد',
      invalid: 'لطفا یک شماره کارت ملی معتبر وارد نمایید',
    },
    password: {
      required: 'این فیلد ضروری است',
    },
    required: 'این فیلد ضروری است',
  },
  companyName: 'نامی مناسب برای خیریه',
  actions: { dismiss: 'انصراف', open: 'باز کردن', delete: 'حذف کردن' },
  households: {
    title: 'خانوارها',
    create: 'ایجاد خانواده جدید',
    empty: {
      title: 'خانواده ای وجود ندارد!',
      description: 'متاسفانه لیست خانوارهای شما خالی است.',
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
        failure: () =>
          `مشکلی در ایجاد خانوار به وجود آمد.`,

        success: (name: string) =>
          `خانوار "${name}" با موفقیت ایجاد شد.`,
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
      title: 'لیست خانوارها',
      delete: {
        modal: {
          notification: {
            title: 'حذف خانواده',
            success: (name: string) => `خانوار “${name}” با موفقیت حذف شد.`,
            failed: (name: string) =>
              `مشکلی در مرحله حذف خانوار "${name}" به وجود آمده است. لطفا دوباره تلاش کنید.`,
          },
          title: 'حذف',
          children: (name: string) =>
            `آیا از حذف خانواده "${name}" مطمئن هستید؟`,
          cancel: 'انصراف',
          confirm: 'حذف',
        },
      },
      table: {
        columns: ['ردیف', 'نام', 'وضعیت اطلاعات', 'وضعیت نیازمندی'],
      },
    },
  },
  projects: {
    title: 'پروژه‌ها',
    create: 'ایجاد پروژه جدید',
    validation: {
      minLength: 'نام پروژه باید حداقل ۳ حرف باشد',
    },
    notification: {
      successfulCreate: (name: string) =>
        `پروژه ای با نام "${name}" .با موفقیت ایجاد شده است`,
      failedCreate: (name: string) =>
        `مشکلی در مرحله ایجاد پروژه ای با نام "${name}" .به وجود آمده است. لطفا دوباره تلاش کنید`,
    },
    empty: {
      title: 'پروژه ای وجود ندارد!',
      description: 'متاسفانه لیست پروژه‌های شما خالی است.',
    },
    createForm: {
      nameInput: {
        placeholder: 'برای مثال: خرید مدرسه',
        label: 'نام',
      },
      descriptionInput: {
        placeholder: 'توضیحی در مورد پروژه',
        label: 'توضیحات',
      },
      submitBtn: {
        text: 'ایجاد پروژه',
      },
    },
    list: {
      title: 'لیست پروژه‌ها',
      table: {
        columns: ['ردیف', 'نام'],
      },
    },
  },
  nationalities: {
    ir: 'ایران',
    unknown: 'نامشخص',
  },
  genders: {
    Male: 'مرد',
    Female: 'زن',
    unknown: 'نامشخص',
  },
  religions: {
    islam: 'اسلام',
    unknown: 'نامشخص',
  },
  cities: {
    tehran: 'تهران',
    unknown: 'نامشخص',
  },
  householder: {
    detail: {
      title: 'اطلاعات هویت',
    },
    form: {
      editBtn: 'ویرایش',
      title: 'اطلاعات هویت',
      undoBtn: 'لغو',
      notification: {
        successfulUpdate: (name: string) =>
          `خانوار "${name}" با موفقیت بروز رسانی شد `,
        failedUpdate: (name: string) =>
          `مشکلی در به روزرسانی اطلاعات خانوار "${name}" .به وجود آمده است. لطفا دوباره تلاش کنید`,
      },
      submitBtn: 'ثبت',
      selectInputs: {
        placeholder: 'انتخاب کنید',
      },
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
        label: 'شماره ملی',
        placeholder: 'برای مثال: ۰۱۲۳۴۵۶۷۸۹',
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
      dobInput: {
        label: 'تاریخ تولد',
        placeholder: 'برای مثال: ۱۳۹۹/۱۰/۱۰',
      },
      cityOfBirthInput: {
        label: 'شهر',
        placeholder: 'برای مثال: تهران',
      },
    },
  },
  member: {
    title: 'اعضا',
    addNewMember: 'افزودن عضو',
    empty: {
      title: 'عضوی وجود ندارد!',
      description: 'عضوی برای این خانواده ثبت نشده است',
    },
    createForm: {
      submitBtn: 'ثبت',
      selectInputs: {
        placeholder: 'انتخاب کنید',
      },
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
        options: {
          ir: 'ایران',
        },
        label: 'ملیت',
        placeholder: 'برای مثال: ایرانی',
      },
      nationalIdInput: {
        label: 'شماره ملی',
        placeholder: 'برای مثال: ۰۱۲۳۴۵۶۷۸۹',
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
      dobInput: {
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
  householdDetail: {
    title: 'اطلاعات کلی خانواده',
    notFound: 'خانواده مورد نظر یافت نشد',
    delete: 'حذف کردن',
    tabs: {
      householderTitle: 'سرپرست',
      membersTitle: 'اعضا',
    },
    panels: {
      title: 'second panel',
    },
    householdFields: {
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
  projectDetail: {
    title: 'اطلاعات پروژه',
    notFound: 'اطلاعات پروژه یافت نشد',
    tabs: {
      albumTitle: 'آلبوم',
      membersTitle: 'اعضا',
    },
    panels: {
      title: 'second panel',
    },
    projectFields: {
      name: {
        title: 'نام پروژه',
      },
      projectStatus: { title: 'وضعیت پروژه' },
      membersCount: {
        title: 'تعداد اعضا',
        empty: 'ندارد',
      },
      startDate: {
        title: 'تاریخ شروع',
      },
      endDate: {
        title: 'تاریخ پایان',
      },
      description: {
        title: 'توضیحات',
      },
    },
  },
  logout: {
    link: 'خروج',
    modal: {
      title: 'خروج از حساب کاربری',
      confirmMessage: 'آیا می خواهید از حساب کاربری خود خارج شوید؟',
      accept: 'بله، خارج می شوم',
      cancel: 'انصراف',
    },
  },
} as const;
