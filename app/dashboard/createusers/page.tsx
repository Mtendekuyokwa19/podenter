import { Card } from "@heroui/card";

export default function visitors() {
  return (
    <section>
      <MemberList />
    </section>
  );
}
function Member() {
  return (
    <Card className="flex-row justify-between my-5 p-6">
      <div>1</div>
      <div>name</div>

      <div>snowden</div>
      <div>email</div>

      <div>phonenumber</div>
      <div>logintime</div>
      <div>log out</div>
    </Card>
  );
}

function MemberList() {
  let allMembers = [];
  for (let i = 0; i < 5; i++) {
    allMembers.push(<Member />);
  }
  return (
    <section className="my-8">
      <div>{allMembers}</div>
    </section>
  );
}
