import { createContext, useEffect, useState } from 'react'
import images from '../constants/images'

const Context = createContext()

export const ContextProvider = ({children}) => {
    const [serviceItems1, setPortfolioItems1] = useState([
        {
            id: 1,
            logo: `${images.service1}`,
            subject: 'Masaže',
            tretmanNaziv1: 'Relax celo telo žene',
            opisTretmana1: '2000din, muski 2500',
            slikaTretmana1: `${images.imagePlace}`,
            tretmanNaziv2: 'Terapeutska masaza',
            opisTretmana2: '1h žene 2500, muski 3000',
            slikaTretmana2: `${images.imagePlace}`,
            tretmanNaziv3: 'Leđa',
            opisTretmana3: 'Pola sata zene 1500, muski 2000',
            slikaTretmana3: `${images.imagePlace}`,
            tretmanNaziv4: '40min leđa, ruke, vrat, glava',
            opisTretmana4: 'Zene 2000 Musko 2500',
            slikaTretmana4: `${images.imagePlace}`,
            tretmanNaziv5: 'Stopala',
            opisTretmana5: '1000din 20min',
            slikaTretmana5: `${images.imagePlace}`,
            tretmanNaziv6: 'Parcijalno noge, listovi, ruke vrat... ',
            opisTretmana6: 'Pola sata 1500 din',
            slikaTretmana6: `${images.imagePlace}`,
            tretmanNaziv7: 'Rucna anticelulit masaža ',
            opisTretmana7: '1500din pola sata',
            slikaTretmana7: `${images.imagePlace}`,
            tretmanNaziv8: 'Limfna drenaža',
            opisTretmana8: '3000',
            slikaTretmana8: `${images.imagePlace}`,
            tretmanNaziv9: 'Medicinska masaza vratnog dela kičme i leđa',
            opisTretmana9: '2000 din pola sata',
            slikaTretmana9: `${images.imagePlace}`,
            tretmanNaziv10: 'Masaza u paru',
            opisTretmana10: '4500',
            slikaTretmana10: `${images.imagePlace}`,
            tretmanNaziv11: 'Kraljevska masaza ',
            opisTretmana11: '4000din',
            slikaTretmana11: `${images.imagePlace}`,
            tretmanNaziv12: 'Reiki tretman',
            opisTretmana12: '3500din',
            slikaTretmana12: `${images.imagePlace}`,
            showCardDetalis: false

        },
        {
            id: 2,
            logo: `${images.service2}`,
            subject: 'Tretmani lica',
            tretmanNaziv1: 'Anticelulit tretman zatezanja kože',
            opisTretmana1: 'Zajedno sa topljenjem masnih naslaga od 20e do 100e zavisi od broja regija',
            slikaTretmana1: `${images.imagePlace}`,
            tretmanNaziv2: 'Kavitacija i rf tretman zatezanja kože',
            opisTretmana2: 'Zajedno od 30e po regiji do 100e za celo telo.',
            slikaTretmana2: `${images.imagePlace}`,
            tretmanNaziv3: 'Lipo laser',
            opisTretmana3: 'Tretman za uklanjanje masnih naslaga, liposukcija bez noža do 1kg manje po tretmanu.',
            slikaTretmana3: `${images.imagePlace}`,
            tretmanNaziv4: 'Madero terapija',
            opisTretmana4: 'Za zategnute noge bez celulita uz ultrazvučnu masažu 2000 din tretman ili 18 000 10 tretmana',
            slikaTretmana4: `${images.imagePlace}`,
            tretmanNaziv5: 'Kombinovani tretman kavitacije, rf tretman zatezanja kože i lipo laser',
            opisTretmana5: '70e tretman obuhvata celo telo',
            slikaTretmana5: `${images.imagePlace}`,
            tretmanNaziv6: 'Radio talasni lifting za zatezanje kože bez noža',
            opisTretmana6: '10e po regiji',
            slikaTretmana6: `${images.imagePlace}`,
            tretmanNaziv7: 'Tretman uklanjanja podbratka',
            opisTretmana7: '10e tretman.',
            slikaTretmana7: `${images.imagePlace}`,
            tretmanNaziv8: 'Higijenski tretman lica',
            opisTretmana8: '3000',
            slikaTretmana8: `${images.imagePlace}`,
            tretmanNaziv9: 'Tretman lica ultrazvučnom špatulom',
            opisTretmana9: '2000din.',
            slikaTretmana9: `${images.imagePlace}`,
            tretmanNaziv10: 'Hidrodermoabrazija',
            opisTretmana10: '2000din.',
            slikaTretmana10: `${images.imagePlace}`,
            tretmanNaziv11: 'Mikrodermoabrazija',
            opisTretmana11: '2000din.',
            slikaTretmana11: `${images.imagePlace}`,
            tretmanNaziv12: 'Paket higijenski tretman lica plus hidro i mikro deremo',
            opisTretmana12: '2000din.',
            slikaTretmana12: `${images.imagePlace}`,
            tretmanNaziv13: 'Biorevitalizacija kože',
            opisTretmana13: '4000din.',
            slikaTretmana13: `${images.imagePlace}`,
            tretmanNaziv14: 'Tretman buđenja kolagena, podmlađivanje lica na prirodan način ',
            opisTretmana14: '4000din.',
            slikaTretmana14: `${images.imagePlace}`,
            tretmanNaziv15: 'Relax masaža lica',
            opisTretmana15: '20min 1000 din',
            slikaTretmana15: `${images.imagePlace}`,
            tretmanNaziv16: 'Lifting masaza lica',
            opisTretmana16: '30min 2000din',
            slikaTretmana16: `${images.imagePlace}`,
            tretmanNaziv17: 'Ispitivanje stanja kože lica',
            opisTretmana17: 'Najnovija tehnologija 2000din',
            slikaTretmana17: `${images.imagePlace}`,
            showCardDetalis: false
        },
        {
            id: 3,
            logo: `${images.service3}`,
            subject: 'Pedikir',
            tretmanNaziv1: 'Medicinski pedikir',
            opisTretmana1: '2500din',
            slikaTretmana1: `${images.imagePlace}`,
            tretmanNaziv2: 'Parafiransko pakovanje ruku i nogu',
            opisTretmana2: '500 i 750 zajedno 1200',
            slikaTretmana2: `${images.imagePlace}`,
            tretmanNaziv3: 'Manikir prirodnih noktiju',
            opisTretmana3: '750din',
            slikaTretmana3: `${images.imagePlace}`,
            tretmanNaziv4: 'Naziv tretmana4',
            opisTretmana4: 'Opis tretmana4, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            slikaTretmana4: `${images.imagePlace}`,
            showCardDetalis: false
        },
        {
            id: 4,
            logo: `${images.service4}`,
            subject: 'Mrsavljenje',
            tretmanNaziv1: 'Naziv tretmana1',
            opisTretmana1: 'Opis tretmana1, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            slikaTretmana1: `${images.imagePlace}`,
            tretmanNaziv2: 'Naziv tretmana2',
            opisTretmana2: 'Opis tretmana2, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            slikaTretmana2: `${images.imagePlace}`,
            tretmanNaziv3: 'Naziv tretmana3',
            opisTretmana3: 'Opis tretmana3, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            slikaTretmana3: `${images.imagePlace}`,
            tretmanNaziv4: 'Naziv tretmana4',
            opisTretmana4: 'Opis tretmana4, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            slikaTretmana4: `${images.imagePlace}`,
            showCardDetalis: false
        }
    ])

    const [FlagItem, setFlagItem] = useState({
        itemReady: {},
        edit: false
    })

    // Set item to be updated
    const showDetalis = (itemReady) => {
        setFlagItem({
            itemReady,
            edit: true
        })
    }

    // Close Detalis
    const closeDetalis = () => {
        setFlagItem({
            itemReady: {},
            edit: false
        })
    }


    return <Context.Provider value={{
        serviceItems1,
        FlagItem,
        showDetalis,
        closeDetalis
        
    }}>
        {children}
    </Context.Provider>
}

export default Context;