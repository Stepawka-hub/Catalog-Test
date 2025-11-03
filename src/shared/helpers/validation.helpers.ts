export const minLengthValidation = (minLength: number) => ({
  minLength: {
    value: minLength,
    message: `Минимальная длина поля: ${minLength}`,
  },
});

export const maxLengthValidation = (maxLength: number) => ({
  maxLength: {
    value: maxLength,
    message: `Максимальная длина поля: ${maxLength}`,
  },
});

export const requiredValidation = () => ({
  required: "Поле является обязательным!",
});

export const minValueValidation = (value: number, message?: string) => ({
  min: {
    value,
    message: message || `Значение должно быть не меньше ${value}`,
  },
});

export const maxValueValidation = (value: number, message?: string) => ({
  max: {
    value,
    message: message || `Значение не должно превышать ${value}`,
  },
});
