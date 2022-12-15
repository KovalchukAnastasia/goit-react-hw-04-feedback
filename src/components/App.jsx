import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleChange = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotal = () => good + neutral + bad;

  const countPositivePercentage = () => {
    const total = countTotal();
    const positive = good;
    let result = null;
    if (total > 0) {
      result = Math.ceil((positive / total) * 100);
    }
    console.log(result);
    return result;
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
      </Section>
      <Section title="Statistics">
        {countTotal() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Layout>
  );
}
