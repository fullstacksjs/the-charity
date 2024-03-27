import type { ServerError } from '@camp/domain';

export const errorMessages: Record<ServerError, string> = {
  INTERNAL_SERVER: 'خطا در ارتباط با سرور. لطفا دوباره تلاش کنید.',
  INVALID_CREDENTIALS: 'متاسفانه، کاربری با اطلاعات وارد شده یافت نشد.',
  UNKNOWN_ERROR: 'متاسفانه خطایی رخ داده است',
};

export const messages = {
  form: {
    selectInputs: {
      placeholder: 'انتخاب کنید',
    },
  },
  tablePagination: {
    page: (currentPage: number, total: number) =>
      `صفحه ${currentPage} از ${Math.max(total, 1)}`,
    prevPage: 'صفحه قبل',
    nextPage: 'صفحه بعد',
  },
  notification: {
    addDocument: {
      unsupportedType: 'فایل انتخاب شده پشتیبانی نمی‌شود',
      maxSizeExceeded: 'حداکثر سایز فایل انتخابی ۲۰ مگابایت هست.',
    },
    visits: {
      delete: {
        title: 'حذف بازدید',
        success: (name: string) => `بازدید “${name}” با موفقیت حذف شد.`,
        failed: (name: string) =>
          `مشکلی در مرحله حذف بازدید "${name}" به وجود آمده است. لطفا دوباره تلاش کنید.`,
        cantDeleteLst: 'اسناد نمی‌تواند خالی باشند',
      },
    },
    household: {
      delete: {
        title: 'حذف خانوار',
        success: (name: string) => `خانوار “${name}” با موفقیت حذف شد.`,
        failed: (name: string) =>
          `مشکلی در مرحله حذف خانوار "${name}" به وجود آمده است. لطفا دوباره تلاش کنید.`,
      },
      complete: {
        title: 'تکمیل خانوار',
        success: (name: string) => `خانوار “${name}” با موفقیت کامل شد.`,
        failed: (name: string) =>
          `مشکلی در تکمیل خانوار "${name}" به وجود آمده است. لطفا دوباره تلاش کنید.`,
      },
      edit: {
        title: 'خانوار',
        success: (name: string) => `خانوار "${name}" با موفقیت بروز رسانی شد.`,
        failed: (name: string) =>
          `مشکلی در به روزرسانی اطلاعات خانوار "${name}" .به وجود آمده است. لطفا دوباره تلاش کنید`,
      },
    },
    member: {
      delete: {
        title: 'حذف عضو',
        success: (name: string) => `عضو “${name}” با موفقیت حذف شد.`,
        failed: (name: string) =>
          `مشکلی در مرحله حذف عضو "${name}" به وجود آمده است. لطفا دوباره تلاش کنید.`,
      },
      edit: {
        title: 'آپدیت عضو',
        success: (name: string) => `عضوی با نام "${name}" .با موفقیت آپدیت شد`,
        failed: (name: string) =>
          `مشکلی در تغییر عضوی با نام "${name}" .بوجود آمده است. لطفا دوباره تلاش کنید`,
      },
      create: {
        title: 'عضو جدید',
        success: (name: string) => `عضوی با نام "${name}" .با موفقیت ایجاد شد`,
        failed: (name: string) =>
          `مشکلی در ایجاد عضوی با نام "${name}" .بوجود آمده است. لطفا دوباره تلاش کنید`,
      },
    },
  },
  date: {
    format: (date: Date) => new Intl.DateTimeFormat('fa-IR').format(date),
  },
  validation: {
    document: {
      required: 'فایل الزامی',
      unsupportedExtension: 'فایل مجاز نیست',
    },
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
  actions: {
    download: 'دانلود',
    dismiss: 'انصراف',
    open: 'باز کردن',
    delete: 'حذف',
    undoBtn: 'لغو',
    editBtn: 'ویرایش',
    submitBtn: 'ثبت',
  },

  households: {
    title: 'خانوارها',
    create: 'ایجاد خانوار جدید',
    empty: {
      title: 'خانوار ای وجود ندارد!',
      description: 'متاسفانه لیست خانوارهای شما خالی است.',
    },
    validation: {
      minLength: 'نام خانوار باید حداقل ۳ حرف باشد',
    },
    createForm: {
      nameInput: {
        placeholder: 'برای مثال: مرادی',
        label: 'نام',
        description:
          'نام مناسب برای خانوار می تواند نام خانوادگی سرپرست خانوار باشد',
      },
      submitBtn: {
        text: 'ایجاد خانوار',
      },
      notification: {
        failure: () => `مشکلی در ایجاد خانوار به وجود آمد.`,

        success: (name: string) => `خانوار "${name}" با موفقیت ایجاد شد.`,
      },
    },
    informationStatus: {
      completed: 'تکمیل شده',
      draft: 'تکمیل نشده',
    },
    severityStatus: {
      Critical: 'اضطراری',
      Normal: 'عادی',
    },
    list: {
      title: 'لیست خانوارها',
      delete: {
        modal: {
          title: 'حذف',
          children: (name: string) =>
            `آیا از حذف خانوار "${name}" مطمئن هستید؟`,
          cancel: 'انصراف',
          confirm: 'حذف',
        },
      },
      table: {
        columns: {
          order: 'ردیف',
          name: 'نام',
          status: 'وضعیت اطلاعات',
          severity: 'وضعیت نیازمندی',
        },
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
    informationStatus: {
      completed: 'تکمیل شده',
      disabled: 'شروع نشده',
    },
    list: {
      title: 'لیست پروژه‌ها',
      table: {
        columns: {
          order: 'ردیف',
          name: 'نام',
          description: 'توضیحات',
          status: 'وضعیت اطلاعات',
          fullDate: 'تاریخ شروع - پایان',
        },
        rows: {
          unknown: 'مشخص نشده',
        },
      },
    },
  },
  province: {
    Tehran: 'تهران',
    Fars: 'فارس',
    Unknown: 'نامشخص',
  },
  nationalities: {
    Ir: 'ایران',
    Unknown: 'نامشخص',
  },
  disabilityStatus: {
    NoDisability: 'بدون روحی',
    PhysicalDisability: 'معلولیت جسمی',
    MentalDisability: 'معلولیت روحی',
    BothPhysicalAndMental: 'معلولیت روحی و جسمی',
  },
  genders: {
    Male: 'مرد',
    Female: 'زن',
    Unknown: 'نامشخص',
  },
  religions: {
    Islam: 'اسلام',
    Unknown: 'نامشخص',
  },
  cities: {
    Tehran: 'تهران',
    Unknown: 'نامشخص',
  },
  accommodationTypes: {
    Owner: 'صاحب',
    Rent: 'مستاجر',
  },
  insurance: {
    Welfare: 'تامین اجتماعی',
    Health: 'سلامت',
  },
  skills: {
    Driving: 'رانندگی',
    Carpentry: 'نجاری',
  },
  subsideTypes: {
    Welfare: 'بهزیستی',
    RescueCommittee: 'کمیته امداد',
  },
  jobs: {
    Psychologist: 'روان‌شناس',
    Worker: 'کارگر',
  },
  healthStatus: {
    Healthy: 'سالم',
    Sick: 'بیمار',
  },
  addictionStatus: {
    CurrentlyAddicted: 'معتاد',
    FormerlyAddicted: 'سابقه اعتیاد',
    NeverAddicted: 'سالم',
  },
  householder: {
    visits: {
      delete: {
        modal: {
          title: 'حذف',
          children: (name: string) =>
            `آیا از حذف بازدید "${name}" مطمئن هستید؟`,
          cancel: 'انصراف',
          confirm: 'حذف',
        },
      },
      table: {
        columns: {
          order: 'ردیف',
          documents: 'اسناد',
          date: 'تاریخ',
          description: 'توضیحات',
        },
      },
      form: {
        nameInput: {
          placeholder: 'برای مثال: مرادی',
          label: 'نام بازدید کننده',
        },
        dateInput: {
          label: 'تاریخ',
          placeholder: '۱۴۰۰/۰۱/۰۱',
        },
        descriptionInput: {
          label: 'توضیحات',
          placeholder: 'توضیحات',
        },
        documentsInput: {
          label: 'اسناد',
          maxSize: 'فایل باید کمتر از ۲۰ مگابایت باشد',
        },
        submitBtn: 'ایجاد سند',
      },
      detail: {
        title: 'اطلاعات بازدید',
      },
      title: 'بازدیدها',
      addVisit: 'افزودن بازدید',
    },
    healthForm: {
      title: 'اطلاعات وضعیت سلامت',
      addictionStatusInput: {
        label: 'اعتیاد',
      },
      insuranceInput: {
        label: 'بیمه',
      },
      disabilityStatusInput: {
        label: 'معلولیت',
      },
      disabilityDescriptionInput: {
        label: 'توضیحات معلولیت',
        placeholder: 'قطع عضو',
      },
      healthStatusInput: {
        label: 'سلامت',
      },

      healthDescriptionInput: {
        label: 'توضیحات سلامت',
        placeholder: 'بیماری پوستی',
      },
    },
    financialForm: {
      title: 'وضعیت مالی',
      jobInput: {
        label: 'شغل فعلی',
      },
      incomeInput: {
        label: 'درآمد ماهانه (ریال)',
        placeholder: '۲۰,۰۰۰,۰۰۰',
      },
      skillsInput: {
        label: 'مهارت‌ها',
      },
      subsideTypesInput: {
        label: 'کمک‌ها مالی',
      },
      subsideInput: {
        label: 'میزان کمک مالی (ریال)',
        placeholder: '۲۰,۰۰۰,۰۰۰',
      },
      rentInput: {
        label: 'مبلغ اجاره',
        placeholder: '۲۰,۰۰۰,۰۰۰',
      },
      bankCardNumberInput: {
        label: 'شماره کارت',
        placeholder: '۱۹۰۵۹۴۳۹۳۰۱۳۹۲۹۳',
      },
      bankAccountNumberInput: {
        label: 'شماره حساب',
        placeholder: '۱۹۰۵۹۴۳۹۳۰۱۳۹۲۹۳',
      },
      financialCommentInput: {
        label: 'توضیحات',
      },
    },
    contactForm: {
      title: 'اطلاعات محل سکونت',
      nationalityInput: {
        label: 'ملیت',
        placeholder: 'برای مثال: ایرانی',
      },
      cityOfBirthInput: {
        label: 'شهر',
        placeholder: 'برای مثال: تهران',
      },
      selectInputs: {
        placeholder: 'انتخاب کنید',
      },
      provinceInput: {
        label: 'استان',
        placeholder: 'برای مثال: تهران',
      },
      cityInput: {
        label: 'شهر',
        placeholder: 'برای مثال: ساوه',
      },
      addressInput: {
        label: 'آدرس',
        placeholder: 'برای مثال: خیابان مطهری',
      },
      neighborhoodInput: {
        label: 'محله',
        placeholder: 'برای مثال: خیابان ولی عصر ، مجتمع فول استکس ، واحد ۸',
      },
      accommodationTypeInput: {
        label: 'نوع تملک',
        placeholder: 'برای مثال: مستاجر',
      },
      priorAccommodationAddressInput: {
        label: 'محل سکونت سابق',
        placeholder: 'برای مثال: خیابان مطهری',
      },
      zipCodeInput: {
        label: 'کد پستی',
        placeholder: 'برای مثال: ۱۲۳۴۵۶۷۸۹۰',
      },
      descriptionInput: {
        placeholder: 'خیابان فلان، مجتمع بیسار، واحد ۸',
        label: 'توضیحات',
      },
    },
    detail: {
      title: 'اطلاعات هویت',
    },
    form: {
      title: 'اطلاعات هویت',
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
      title: 'عضو جدید',
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
    title: 'خوش آمدید',
    desc: 'به حساب کاربری خود وارد شوید',
    button: 'ورود',
  },
  householdDetail: {
    title: 'اطلاعات کلی خانوار',
    notFound: 'خانوار مورد نظر یافت نشد',
    delete: 'حذف کردن',
    edit: 'ویرایش',
    complete: 'تکمیل',
    tabs: {
      visitsTitle: 'بازدیدها',
      householderTitle: 'سرپرست',
      membersTitle: 'اعضا',
    },
    panels: {
      title: 'second panel',
    },
    householdFields: {
      name: {
        title: 'نام',
      },
      severityStatus: {
        title: 'وضعیت نیازمندی',
      },
      informationStatus: {
        title: 'وضعیت اطلاعات',
      },
      membersCount: {
        title: 'تعداد اعضا',
        present: (count: number) => `${count} نفر`,
      },
    },
  },
  projectDetail: {
    title: 'اطلاعات پروژه',
    notFound: 'اطلاعات پروژه یافت نشد',
    tabs: {
      documentsTitle: 'اسناد',
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
    addDocument: {
      form: {
        dateInput: {
          label: 'تاریخ',
          placeholder: '۱۴۰۰/۰۱/۰۱',
        },
        descriptionInput: {
          label: 'توضیحات',
          placeholder: 'توضیحات',
        },
        documentsInput: {
          label: 'اسناد',
          maxSize: 'فایل باید کمتر از ۲۰ مگابایت باشد',
        },
        submitBtn: 'ایجاد سند',
      },
      title: 'ایجاد سند جدید',
      description: 'توضیحات',
      addDocBtn: 'افزودن',
      addDocFileBtn: 'بارگذاری سند',
      note: 'سند را اینجا قرار دهید',
    },
  },
  logout: {
    link: 'خروج',
    modal: {
      title: 'خروج از حساب کاربری',
      confirmMessage: 'آیا می خواهید از حساب کاربری خود خارج شوید؟',
      accept: 'خارج می شوم',
      cancel: 'انصراف',
    },
  },
} as const;
