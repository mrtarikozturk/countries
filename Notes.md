```js
const Country = (props: ICountryProps) => { }
```
- props type yukarida oldugu gibi tanimlandiginda `props` icerisinde default olarak gelen `children` ve `key` gibi property'lere erisilemez. Bu nedenle bu property'lere de erisilmek isteniyorsa daha saglikli olarak asagidaki gibi belirtilmesi gerekir.

```js
const Country: React.FC<ICountryProps> = (props) =>{}
```

- Axios isteklerinde type safe asagidaki gibi yapilir. API isteklerinden donen json verilerin tiplerini typescript olarak almak icin [bu site](http://json2ts.com/) kullanilabilir.

```js
await axios.get<CountryType[]>(url);
```