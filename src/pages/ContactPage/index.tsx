import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled } from "styled-components";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(data: unknown) {
    console.log(data);
  }

  return (
    <PageStyles>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <input
            {...register("name")}
            placeholder="Name (min. 3 ch.)"
            className={errors.name?.message ? "invalid" : "valid"}
          />
          <p className="error-msg">{errors.name?.message as string}</p>
        </div>
        <div className="input-group">
          <input
            {...register("email")}
            placeholder="Email (eg. myname@example.com)"
            className={errors.email ? "invalid" : "valid"}
          />
          <p className="error-msg">{errors.email?.message as string}</p>
        </div>
        <div className="input-group">
          <input
            {...register("subject")}
            placeholder="Subject (min 3 ch.)"
            className={errors.subject ? "invalid" : "valid"}
          />
          <p className="error-msg">{errors.subject?.message as string}</p>
        </div>
        <div className="input-group">
          <textarea
            {...register("body")}
            rows={5}
            placeholder="Write your message here (min 3 ch.)"
            className={errors.body ? "invalid" : "valid"}
          ></textarea>
          <p className="error-msg">{errors.body?.message as string}</p>
        </div>
        <button type="submit" className="cta">
          Submit
        </button>
      </form>
    </PageStyles>
  );
}

const PageStyles = styled.div`
  margin-inline: auto;
  margin-block: 4rem;
  max-width: 1000px;

  & form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .input-group {
      display: flex;
      column-gap: 1rem;
      flex-wrap: wrap;
    }

    .error-msg {
      min-width: 20ch;
      margin-block: 4px 1rem;
      color: #d22f27;
    }

    & input,
    textarea {
      padding: 0.75rem 1rem;
      font-family: inherit;
      max-width: 500px;
      min-width: min(100%, 300px);
      flex: 1;

      &.valid {
        box-shadow: 5px 5px 0px #26a4b0;
        border: 1px solid #26a4b0;
      }
      &.invalid {
        box-shadow: 5px 5px 0px #d22f27;
        border: 1px solid #d22f27;
      }
    }

    button[type="submit"] {
      align-self: flex-start;
    }
  }
`;

const formSchema = yup.object({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  subject: yup.string().min(3).required(),
  body: yup.string().min(3).required(),
});
