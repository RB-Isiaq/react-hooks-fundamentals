/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useCallback } from "react";

export function useForm<T extends Record<string, any>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = useCallback(
    (name: keyof T, value: any) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const validate = useCallback(
    (
      validationRules: Partial<
        Record<keyof T, (value: any) => string | undefined>
      >
    ) => {
      const newErrors: Partial<Record<keyof T, string>> = {};

      Object.keys(validationRules).forEach((key) => {
        const rule = validationRules[key as keyof T];
        if (rule) {
          const error = rule(values[key as keyof T]);
          if (error) {
            newErrors[key as keyof T] = error;
          }
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [values]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return { values, errors, handleChange, validate, reset };
}
