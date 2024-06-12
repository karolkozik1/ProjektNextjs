import Link from "next/link";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,} from "@/components/ui/drawer"
  

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h1 className="text-3xl text-bold text-center">
              Strona testowa
            </h1>
            <p className="text-center text-blue-600">Nocny widok z okna w zorzę polarną na długiej ekspozycji</p>
            <Image src="/okno.jpg" width={680} height={512} alt="Nocny widok z okna w zorzę polarną na długiej ekspozycji"/>
            <div></div>
            <p className="align-center">
             <Drawer>
                <DrawerTrigger >Otwórz szufladę</DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Szuflada</DrawerTitle>
                            <DrawerDescription>Oto szuflada.</DrawerDescription>
                        </DrawerHeader>
                     <DrawerFooter>
                    <DrawerClose>
                    <Button>OK</Button>
                    <Button variant="outline">Anuluj</Button>
                    </DrawerClose>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </p>
            <p className="text-center"><Link href="/"> Pierwsza strona</Link></p>
        </div>
      </main>
    );
}