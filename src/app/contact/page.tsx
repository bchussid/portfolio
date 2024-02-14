import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneCall, HomeIcon } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[420px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hit me up! 👋
            </div>
            <h2 className="h2 max-w-md mb-8">Get in touch</h2>
            <p className="subtitle max-w-[400px]">
              {" "}
              Want to chat, connect, or just say hi? Get in touch!
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration bg-contain bg-no-repeat bg-top"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-4">
              <MailIcon size={18} className="text-primary" />
              <div>myemail@me.com</div>
            </div>
            {/* area */}
            <div className="flex items-center gap-x-4">
              <HomeIcon size={18} className="text-primary" />
              <div>Durham, NC</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-4">
              <PhoneCall size={18} className="text-primary" />
              <div>(555) 555-5555</div>
            </div>
          </div>
          {/* form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
