import HeaderLayout from "./homepage/header";
import SecondRow from "./homepage/second_row";
import ThirdRow from "./homepage/third_row";
import WelcomeLayout from "./homepage/welcome";

export default function Home() {
  return (
    <main className="">
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
      <a target="_blank" rel="noopener noreferrer"
      href="https://docs.google.com/spreadsheets/d/1uYVYcAASsKZmrnbT69B8HFFIM-8yjxzq6r_EknF9GIA/edit?usp=sharing">
        <div id='catalog'
          className="flex justify-center align-bottom"
          style={{
            backgroundColor: '#2A629A',
            fontSize: '15pt', fontWeight: 'bold',
            width: 'inherit', height: '35px', alignItems: 'flex-end'
          }}
        >
          Katalatog
        </div>
      </a>
    </main>
  );
}
