import { loginSchema, useLogin } from "../../api";
import { Input } from "@/components/ui/form/input/";
import { AuthForm } from "../auth-form";
import { Button } from "@/components/ui/button";

export const LoginForm = () => {
  const fetchLogin = useLogin();
  return (
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6 relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]" >
      <AuthForm
        h2="Login"
        p="Please enter to login."
        schema={loginSchema}
        onSubmit={(data) => fetchLogin.mutate(data)}
      >
        {({ register, formState }) => (
          <div className="space-y-4 flex flex-col ">
            <Input
              label="Email"
              register={register("email")}
              error={formState.errors.email}
            />
            <Input
              label="Password"
              type="password"
              register={register("password")}
              error={formState.errors.password}
            />
            <Button type="submit" variant={"submit_form"}>Login</Button>
          </div>
        )}
      </AuthForm>
    </div>
  );
};
