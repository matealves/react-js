"use client";

import { SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  type Inputs = {
    name: string;
    lastName: string;
    age: number;
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const handleValidationFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form submitted successfully", data);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        action=""
        onSubmit={handleSubmit(handleValidationFormSubmit)}
        className="w-1/3"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="First Name"
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          {errors.name && (
            <span className="text-red-500">
              {errors.name.type === "required" && "First name is required"}
              {errors.name.type === "minLength" &&
                "First name must be at least 3 characters long"}
              {errors.name.type === "maxLength" &&
                "First name must be at most 20 characters long"}
            </span>
          )}

          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          {errors.lastName && (
            <span className="text-red-500">
              {errors.lastName.type === "required" && "Last name is required"}
            </span>
          )}

          <input
            type="number"
            placeholder="Age"
            {...register("age", {
              required: "Age is required",
              min: 18,
              max: 110,
            })}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          {errors.age && (
            <span className="text-red-500">
              {errors.age.type === "required" && errors.age.message}
              {errors.age.type === "min" && "You must be at least 18 years old"}
              {errors.age.type === "max" &&
                "You must be less than 110 years old"}
            </span>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
