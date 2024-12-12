import Button from "@/components/buttons/Button";
import Container from "@/components/Container";
import EmailInput from "@/components/input/EmailInput";
import PasswordInput from "@/components/input/PasswordInput";
import SimpleTextInput from "@/components/input/SimpleTextInput";
import Tag from "@/components/Tag";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-3xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="font-black text-2xl">frsh-ui.</h1>
          <p>A simple component library using TailwindCSS.</p>
          <p>Copy the code and paste into its own file.</p>
        </div>
        <Container title="Tags">
          <Tag text="React" />
          <Tag text="Red" red />
          <Tag text="Green" green />
          <Tag text="Yellow" yellow />
        </Container>
        <Container title="Buttons">
          <Button>Button</Button>
          <Button disabled>Button</Button>
        </Container>
        <Container title="Inputs">
          <SimpleTextInput label="Name" name="name" placeholder="John Doe" />
          <PasswordInput
            label="Password"
            name="password"
            placeholder="Password"
          />
          <EmailInput label="Email" name="email" placeholder="Email" />
        </Container>
      </main>
    </div>
  );
}
