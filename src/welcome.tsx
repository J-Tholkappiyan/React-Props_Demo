type WelcomeProps = {
  name: string;
};

function Welcome({ name }: WelcomeProps) {
  return <h3>Hello, {name}! Welcome to React.</h3>;
}

export default Welcome;
