export const messages = {
  companyName: 'نامی مناسب برای خیریه',
  actions: { dismiss: 'انصراف' },
  families: {
    path: '/families',
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
    path: '/projects',
    title: 'پروژه ها',
    create: 'ایجاد پروژه جدید',
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
        label: 'نام پروژه',
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
} as const;
