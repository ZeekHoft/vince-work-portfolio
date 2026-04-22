import Image from 'next/image';

export default function WidgetImages() {
    const images = [
        { src: './img1.jpg', alt: 'Image 1', className: 'col-span-2 row-span-2' },
        { src: './img6.jpg', alt: 'Image 6', className: 'col-span-1' },
        { src: './img7.jpg', alt: 'Image 7', className: 'col-span-1' },
        { src: './img4.jpg', alt: 'Image 4', className: 'col-span-1' },
        { src: './img13.jpg', alt: 'Image 13', className: 'col-span-1' },

    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 p-2">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`
                        relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 
                        ${img.className} 
                        ${idx > 0 ? 'aspect-square' : 'aspect-auto'}
                    `}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                </div>
            ))}
        </div>
    );
}
