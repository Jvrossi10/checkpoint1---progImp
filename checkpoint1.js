function microondas(op,tempo){
    switch (op){
        case 1: 
            if (tempo == 10) 
                console.log(`Prato pronto, bom apetite!`) 
            else if (tempo < 10) 
                console.log(`Tempo insuficiente!`)
            else if (tempo > 10 && tempo <= 20) 
                console.log(`O seu prato queimou!`)
            else 
                console.log(`KABUM!`)
        break
        case 2: 
            if (tempo == 8) 
                console.log(`Prato pronto, bom apetite!`) 
            else if (tempo < 8) 
                console.log(`Tempo insuficiente!`)
            else if (tempo > 8 && tempo <= 16) 
                console.log(`O seu prato queimou!`)
            else 
                console.log(`KABUM!`)
            break 
        case 3: 
            if (tempo == 15) 
                console.log(`Prato pronto, bom apetite!`) 
            else if (tempo < 15) 
                console.log(`Tempo insuficiente!`)
            else if (tempo > 15 && tempo <= 30) 
                console.log(`O seu prato queimou!`)
            else 
                console.log(`KABUM!`)
            break 
        case 4: 
            if (tempo == 12) 
                console.log(`Prato pronto, bom apetite!`) 
            else if (tempo < 12)
                console.log(`Tempo insuficiente!`)
            else if (tempo > 12 && tempo <= 24) 
                console.log(`O seu prato queimou!`)
            else 
                console.log(`KABUM!`)
            break
        case 5: 
            if (tempo == 8) 
                console.log(`Prato pronto, bom apetite!`) 
            else if (tempo < 8) 
                console.log(`Tempo insuficiente!`)
            else if (tempo > 8 && tempo <= 16)
                console.log(`O seu prato queimou!`)
            else 
                console.log(`KABUM!`)
            break 
        default: 
            console.log('OPÇÃO INVÁLIDA!')
            break
        }
    
}

console.log(`
MICROONDAS 

1 - PIPOCA 
tempo recomendado: 10s 
2 - MACARRÃO 
tempo recomendado: 8s 
3 - CARNE 
tempo recomendado: 15s 
4 - FEIJÃO
tempo recomendado: 12s 
5 - BRIGADEIRO
tempo recomendado: 8s 
`)


console.log(microondas(5,40))


