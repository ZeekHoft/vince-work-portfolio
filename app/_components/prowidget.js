
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogHeader,
} from "@/components/ui/dialog"
import ListProjects from "./listproprojects";
import ListCertificates from "./listcertificates";
import SmoothScroll from "@/components/smoothscroll";

export default function ProWidget() {
    return (
        <>
            <div className="grid grid-cols-2 gap-20 pt-10 lg:w-300 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-8 m-5 md:m-10 lg:m-20 ">


                <ListProjects />

                <Dialog>
                    <DialogTrigger asChild>
                        <div className="group cursor-pointer flex flex-col items-center gap-2 w-[80px]">
                            <div className="w-[110px] h-[110px] rounded-[16px] overflow-hidden 
                                                    border border-white/10 shadow-lg shadow-black/30
                                                    transition-all duration-200 
                                                    group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-black/40
                                                    group-active:scale-95">
                                <img
                                    src={"./thumbnail.png"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-[11px] text-center text-white/80 leading-tight max-w-[72px] truncate">
                                Certificates
                            </span>
                        </div>
                    </DialogTrigger>
                    <DialogContent
                        showCloseButton={false}
                        style={{ maxWidth: '90vw', width: '90vw' }}
                        className="p-6"
                        // This prevents scroll from leaking to background
                        onWheel={(e) => e.stopPropagation()}
                    >
                        <DialogTitle className="text-white text-4xl h1fontChangeName text-center">Certificates Gallery</DialogTitle>
                        <div
                            className="-mx-6 max-h-[70vh] overflow-y-auto px-6"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            onWheel={(e) => e.stopPropagation()}
                        >
                            <SmoothScroll>
                                <style>{`div::-webkit-scrollbar { display: none; }`}</style>

                                <div className="-mx-6 no-scrollbar max-h-[70vh] overflow-y-auto px-6">
                                    <div className="space-y-6 py-2">
                                        <ListCertificates />
                                    </div>
                                </div>
                            </SmoothScroll>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
        </>
    )
}

