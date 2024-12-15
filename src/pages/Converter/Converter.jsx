import { useEffect, useState } from 'react';
import { Container, Form, InputGroup, Table } from 'react-bootstrap';
import { Breadcrumbs } from '../../components/index';

const Converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [additionalRates, setAdditionalRates] = useState([]);

  const additionalCurrencies = [
    'GBP', 'AUD', 'CAD', 'JPY', 'CHF', 'CNY', 'INR', 'MXN', 'RUB', 'BRL'
  ];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();
        setCurrencies(Object.keys(data.rates));
        setExchangeRate(data.rates[targetCurrency]);

        const result = amount * data.rates[targetCurrency];
        setConvertedAmount(result.toFixed(2));
        const additionalRatesData = additionalCurrencies.map((currency) => {
          const rate = data.rates[currency]; 
          return { currency, rate: rate.toFixed(2) }; 
        });

        setAdditionalRates(additionalRatesData);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };
    fetchRates();
  }, [baseCurrency, targetCurrency, amount]);

  return (
    <section className="converter py-3">
      <Container>
        <Breadcrumbs />
        <div className="my-4">
          <Form>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Miqdor kiriting"
              />
              <Form.Select
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                value={convertedAmount}
                onChange={(e) => setConvertedAmount(e.target.value)}
                placeholder={`${targetCurrency} dagi qiymati`}
              />
              <Form.Select
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
          </Form>

          {convertedAmount && (
            <p className="text-success fs-2">
              {amount || 0} {baseCurrency} = {convertedAmount} {targetCurrency}
            </p>
          )}

          <div className="my-4">
            <h5>Other Currency Conversions Relative to 1 {baseCurrency}:</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Converted Amount (Relative to 1 {baseCurrency})</th>
                </tr>
              </thead>
              <tbody>
                {additionalRates.map((rateData) => (
                  <tr key={rateData.currency}>
                    <td>{rateData.currency}</td>
                    <td>{rateData.rate} {rateData.currency}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Converter;
