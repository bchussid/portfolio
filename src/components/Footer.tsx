import Socials from "./Socials";
const Footer = () => {

  return (
    <footer className="py-16 bg-secondary dark:bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6">
          <Socials
            containerStyles="flex justify-center gap-x-4"
            iconStyles="text-2xl text-foreground dark:text-white/70 hover:text-primary dark:hover:text-primary transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Ben Chussid. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
