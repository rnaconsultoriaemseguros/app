import Image from "next/image";

export default function Contact() {
  return (
    <div className="mb-24">
      <div>
        <Image
          src={"/contact.png"}
          alt="Entre em Contato"
          className="object-contain"
          width={1920}
          height={600}
        />
      </div>

      <div className="text-center mt-16 mb-16">
        <h2 className="md:text-5xl text-4xl font-bold text-[#2B3E59]">
          Contato
        </h2>
        <h3 className="md:text-3xl text-2xl px-8">Entre em contato conosco</h3>
      </div>
    </div>
  );
}
