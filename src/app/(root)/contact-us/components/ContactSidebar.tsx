import { Mail, Phone, MapPin, Clock } from "lucide-react";

type CardProps = {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
};

const Card = ({ title, children, icon }: CardProps) => (
  <div className="rounded-2xl bg-white dark:bg-slate-800 p-4 sm:p-6  transition hover:shadow-2xl group">
    <div className="mb-4 flex h-10 w-10 items-center justify-center  rounded-sm bg-(--primary) text-white transition-all duration-300 group-hover:bg-(--accent)  group-hover:text-white">
      {icon}
    </div>
    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
      {title}
    </h3>
    <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
      {children}
    </div>
  </div>
);

export function ContactSidebar() {
  return (
    <div className="space-y-5 sticky top-20">
      <Card title="Email Us" icon={<Mail size={20} />}>
        info@devsyoftech.com <br />
        We respond within 4 business hours.
      </Card>

      <Card title="WhatsApp / Call" icon={<Phone size={20} />}>
        +91 9028320214 <br />
        Mon–Sat, 9am–7pm IST
      </Card>

      <Card title="Our Office" icon={<MapPin size={20} />}>
        Jaipur, Rajasthan, India 302001 <br />
        By appointment only
      </Card>

      <Card title="Working Hours" icon={<Clock size={20} />}>
        Mon–Fri: 9am–7pm <br />
        Sat: 9am–1pm <br />
        Sun: Closed
      </Card>
    </div>
  );
}
