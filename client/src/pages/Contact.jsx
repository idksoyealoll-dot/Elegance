import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-muted/30">
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
                Get in Touch
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Have a question or want to learn more? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2 text-muted-foreground">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                        data-testid="input-name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2 text-muted-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                        data-testid="input-email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2 text-muted-foreground">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                        data-testid="input-subject"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2 text-muted-foreground">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                        data-testid="input-message"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12"
                      data-testid="button-send"
                    >
                      SEND MESSAGE
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="md:col-span-2 space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-muted rounded-md">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm tracking-widest uppercase font-medium mb-1">
                        Email
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid="text-email">
                        hello@atelier.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-muted rounded-md">
                      <Phone className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm tracking-widest uppercase font-medium mb-1">
                        Phone
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid="text-phone">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-muted rounded-md">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm tracking-widest uppercase font-medium mb-1">
                        Address
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid="text-address">
                        123 Fashion Avenue<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
