"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MailIcon, ArrowRight, MessageSquare, User, Send } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input - name */}
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="Name" />
        <User className="absolute right-4" size={20} />
      </div>
      {/* input - email */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-4" size={20} />
      </div>
      {/* textarea - message */}
      <div className="relative flex items-center">
        <Textarea id="name" placeholder="Type Message Here..." />
        <MessageSquare className="absolute right-4 top-2" size={20} />
      </div>
      <Button className="flex max-w-[200px] items-center gap-x-1 ">
        Send
        {/* <Send size={20} /> */}
        <ArrowRight size={20} />
      </Button>
    </form>
  );
};

export default ContactForm;
