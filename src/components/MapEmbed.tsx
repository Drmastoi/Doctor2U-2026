import React from 'react';

interface MapEmbedProps {
  location: 'manchester' | 'lancashire' | 'preston' | 'blackburn' | 'burnley' | 'chorley' | 'bolton' | 'wigan' | 'lancaster';
}

export default function MapEmbed({ location }: MapEmbedProps) {
  const maps: Record<string, string> = {
    manchester: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152150.31215162445!2d-2.355152285108422!3d53.472224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804da6bb2!2sManchester!5e0!3m2!1sen!2suk!4v1714992000000!5m2!1sen!2suk",
    lancashire: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d599557.7770851167!2d-3.15582305!3d53.86435645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b12d59f0f970d%3A0x40d2d38563721d0!2sLancashire!5e0!3m2!1sen!2suk!4v1714992000000!5m2!1sen!2suk",
    preston: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37803.1118123281!2d-2.73145455!3d53.76317765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b6d68512419f7%3A0xc3ec485642a8684a!2sPreston!5e0!3m2!1sen!2suk!4v1714992000000!5m2!1sen!2suk",
    blackburn: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37804.8885123281!2d-2.51865455!3d53.74765765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b77876a3e5c7d%3A0x7d0a27376a96996d!2sBlackburn!5e0!3m2!1sen!2suk!4v1714992000000!5m2!1sen!2suk",
    burnley: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37788.1118123281!2d-2.27895455!3d53.78917765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b998634863333%3A0xd68916d66e85e54d!2sBurnley!5e0!3m2!1sen!2suk!4v1714992000000!5m2!1sen!2suk",
    chorley: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37855.1118123281!2d-2.66395455!3d53.65217765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b399222222221%3A0x1d21212121212121!2sChorley!5e0!3m2!1sen!2suk!4v1714992000000!5m2!1sen!2suk",
    bolton: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37865.1118123281!2d-2.45795455!3d53.57817765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba77777777777%3A0x1d21212121212121!2sBolton!5e0!3m2!1sen!2suk!4v1714992000000!5m2!1sen!2suk",
    wigan: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37875.1118123281!2d-2.65195455!3d53.54517765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0fffffffffff%3A0x1d21212121212121!2sWigan!5e0!3m2!1sen!2suk!4v1714992000000!5m2!1sen!2suk",
    lancaster: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37655.1118123281!2d-2.82595455!3d54.04717765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b611111111111%3A0x1d21212121212121!2sLancaster!5e0!3m2!1sen!2suk!4v1714992000000!5m2!1sen!2suk"
  };

  return (
    <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-100 shadow-lg my-12">
      <iframe
        src={maps[location] || maps.lancashire}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${location}`}
      ></iframe>
    </div>
  );
}
