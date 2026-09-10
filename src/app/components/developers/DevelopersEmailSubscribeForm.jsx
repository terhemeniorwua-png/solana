"use client";

import { useState } from "react";
import Button from "@/app/components/shared/Button";
import { developersCopy } from "@/data/developers";
import styles from "./DevelopersEmailSubscribeForm.module.css";

const STATUS = { Sending: "sending", Error: "error", Success: "success" };

const ITERABLE_BASE_URL =
  "https://links.iterable.com/lists/publicAddSubscriberForm?publicIdString=";

export default function DevelopersEmailSubscribeForm({ formId }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);

  const submit = async () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    setStatus(STATUS.Sending);
    try {
      const data = new FormData();
      data.append("email", email.trim());
      const response = await fetch(`${ITERABLE_BASE_URL}${formId}`, {
        method: "POST",
        body: data,
      });
      if (!response.ok) throw new Error("Iterable form submission failed");
      setStatus(STATUS.Success);
    } catch {
      setStatus(STATUS.Error);
    }
  };

  let message = null;
  if (status === STATUS.Sending) message = developersCopy.mailSignup.sending;
  else if (status === STATUS.Success) message = developersCopy.mailSignup.success;
  else if (status === STATUS.Error) message = developersCopy.mailSignup.unexpectedError;

  return (
    <div className={styles["form"]}>
      <div className={styles["form__content"]}>
        <div className="w-full">
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsInvalid(false);
            }}
            className={`${styles["form__input"]} form-control rounded-full w-full inline-block`}
            placeholder={developersCopy.mailSignup.placeholder}
          />
        </div>
        <div className={styles["form__button-container"]}>
          <Button
            variant="secondary"
            className={`${styles["form__button"]} rounded-full`}
            disabled={status === STATUS.Sending}
            onClick={submit}
          >
            {developersCopy.mailSignup.signup}
          </Button>
        </div>
      </div>

      {message && (
        <div className="mt-4 w-full m-auto text-center">
          <small style={{ color: status === STATUS.Error ? "red" : undefined }}>
            {message}
          </small>
        </div>
      )}

      {isInvalid && (
        <div className="mt-4 w-full m-auto text-center">
          <p className={styles["form__input-error"]} role="alert">
            {developersCopy.mailSignup.emailError}
          </p>
        </div>
      )}
    </div>
  );
}