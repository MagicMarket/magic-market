import HeaderLayout from "./homepage/header";
import SecondRow from "./homepage/second_row";
import ThirdRow from "./homepage/third_row";
import WelcomeLayout from "./homepage/welcome";

export default function Home() {
  return (
    <main style={
      {
        height:'inherit',
        backgroundColor:'#373A40'
      }
    }>
      <div style={{padding:'5px'}}></div>
      <HeaderLayout>

      </HeaderLayout>
      <div style={{padding:'5px'}}></div>
      <WelcomeLayout>

      </WelcomeLayout>
      <div style={{padding:'5px'}}></div>
      <SecondRow>

      </SecondRow>
      <div style={{padding:'5px'}}></div>

      <ThirdRow>

      </ThirdRow>
    </main>
  );
}
