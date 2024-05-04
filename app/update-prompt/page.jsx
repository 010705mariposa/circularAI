"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";
import VoiceInput from "@components/VoiceInput";

const UpdatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const searchParams = useSearchParams()
  const promptId = searchParams.get('id')

  useEffect(() => {
    const getPromptDetail = async (req) => {
      const response = await fetch(`/api/prompt/${promptId}`)

      const data = await response.json()

      setPost({ 
        prompt: data.prompt,
        tag: data.tag
      })
    }
  
    if (promptId) getPromptDetail()
  }, [promptId])
  

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert('Prompt not found');

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag
        })
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24">
      <Form
        type="Update"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    </section>
  );
};

export default UpdatePrompt;
