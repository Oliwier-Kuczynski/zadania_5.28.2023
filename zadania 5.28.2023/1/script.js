let liczba = Number(prompt("Podaj liczbe cakowita"));

if(liczba % 1 !== 0) {
    alert('Liczba nie jest calkowita');
    liczba = Number(prompt("Podaj liczbe cakowita"));
}

function wyswietlNaEkran(wartosc) {
    const li = document.createElement("li");
    li.textContent = wartosc;

    document.querySelector("ul").append(li);
}

wyswietlNaEkran(liczba);
wyswietlNaEkran(-liczba);
wyswietlNaEkran(liczba + 15);
wyswietlNaEkran(liczba + 0.5);
wyswietlNaEkran(Math.pow(liczba, 2));
wyswietlNaEkran(liczba / 2);
wyswietlNaEkran(liczba % 2);
wyswietlNaEkran(liczba + 1);
wyswietlNaEkran(liczba - 1);
wyswietlNaEkran(Math.floor(liczba / 3));
wyswietlNaEkran(Math.ceil(liczba / 3));
wyswietlNaEkran(Math.round(liczba / 3));
wyswietlNaEkran(Math.sqrt(liczba));
wyswietlNaEkran((Math.random() * 50 - 50) * liczba);
wyswietlNaEkran(Math.abs(liczba));