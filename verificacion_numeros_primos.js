function primo(numero) {
    if (numero <= 1) 
    return false;

    if (numero == 2)
        return true;

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i == 0)
            return false;
    }
    return true;
}