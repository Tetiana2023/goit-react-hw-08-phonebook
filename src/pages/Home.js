export default function Home() {
  return (
    <div>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
         marginTop: '100px',
        }}
      >
        Wellcome to your Phonebook
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
