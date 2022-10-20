export const messages = {
  companyName: 'نامی مناسب برای خیریه',
  actions: { dismiss: 'انصراف' },
  families: {
    title: 'خانواده ها',
    create: 'ایجاد خانواده جدید',
    empty: {
      title: 'خانواده ای وجود ندارد!',
      description: 'متاسفانه لیست خانواده های شما خالی است.',
    },
    validation: {
      required: 'این فیلد ضروری است',
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
    },
  },
  projects: {
    title: 'پروژه ها',
    create: 'ایجاد پروژه جدید',
    notification: {
      successfulCreate: (name: string) =>
        `پروژه ای با نام "${name}" با موفقیت ساخته شد`,
      failedCreate: (name: string) =>
        `مشکلی در مرحله ایجاد پروژه ای با نام ${name} به وجود آمده است. لطفا دوباره تلاش کنید`,
    },
    empty: {
      title: 'پروژه ای وجود ندارد!',
      description: 'متاسفانه لیست پروژه های شما خالی است.',
    },
    validation: {
      required: 'این فیلد ضروری است',
      minLength: 'نام پروژه باید حداقل ۳ حرف باشد',
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
  },
  login: {
    loginFrom: {
      validation: {
        required: 'این فیلد ضروری است',
        emailErrorMessage: 'این یک ایمیل معتبر نیست',
      },
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
} as const;
