export const messages = {
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
      dismissBtn: {
        text: 'انصراف',
      },
    },
  },
  projects: {
    title: 'پروژه ها',
  },
} as const;
