const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-primary-0 text-white flex flex-col sm:flex-row">
        <div className="flex flex-col justify-center px-5 pt-5 items-center sm:mx-20 sm:flex-row">
          <img
            src="https://i.ibb.co/FDJwhxg/The-Suresh-Laundry-1.png"
            alt="logo"
            className="object-cover max-w-12 max-h-12 w-12 h-12"
          />
          <p className="w-1/2 text-center font-light">
            we have been dedicated to providing top-notch laundry services in
            South Mumbai.
          </p>
        </div>
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.70701225188776!2d72.79286213012244!3d18.946610382231565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cdfa731d6a57%3A0x6fdd16270b78a774!2sParshwa%20building!5e0!3m2!1sen!2sin!4v1723207377940!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-40 p-5 rounded-lg relative z-10"
          ></iframe>
          <div className="absolute inset-0 bg-primary-0 opacity-40 z-20 pointer-events-none rounded-xl"></div>
        </div>
      </div>
      <div className="h-[0.6px] w-full bg-slate-500"></div>
      <div className="flex gap-2 bg-primary-0 text-slate-400 items-center justify-center">
        <span className="text-2xl">&copy;</span>
        <p className=" text-center tracking-widest"> 2024 THAT LAUNDRY SHOP</p>
      </div>
    </div>
  );
};

export default Footer;
