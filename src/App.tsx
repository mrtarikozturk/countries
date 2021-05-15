import { useEffect, useState } from 'react';
import axios from 'axios';
import { CountryType } from './types';
import Country from './components/Country';
import Loading from './components/Loading';

const App = () => {

    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getCountries = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get<CountryType[]>('https://restcountries.eu/rest/v2/all');
            setCountries(data)
        } catch {
            console.error('Error created')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCountries();
    }, []);

    console.log(countries)

    return (
        <div>
            <Loading {...{ loading }}>
                {
                    countries.map(country => {
                        return <Country {...{ country }} key={country.name} />
                    })
                }
            </Loading>
        </div>
    )
}

export default App
