import React, { FC } from 'react';

const defaultFormValues = {
  title: '',
  body: '',
};

interface FormValues {
  title: string;
  body: string;
}

interface Props {
  onSubmit: (formValue: FormValues) => void;
  initialValues?: FormValues;
  submitText: string;
  clearOnSubmit?: boolean;
}

export const PostForm: FC<Props> = ({
  onSubmit,
  initialValues = defaultFormValues,
  submitText,
  clearOnSubmit,
}) => {
  const [values, setValues] = React.useState<FormValues>(initialValues);

  const setValue = (field, value) =>
    setValues((old) => ({ ...old, [field]: value }));

  const handleSubmit = (e) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues);
    }
    e.preventDefault();
    onSubmit(values);
  };

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <div>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={(e) => setValue('title', e.target.value)}
          required
        />
      </div>
      <br />
      <label htmlFor="body">body</label>
      <div>
        <textarea
          name="body"
          value={values.body}
          onChange={(e) => setValue('body', e.target.value)}
          required
          rows={10}
        />
      </div>
      <br />
      <button type="submit">{submitText}</button>
    </form>
  );
};
