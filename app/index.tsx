import { Button, Image, Pressable, Text, View } from "react-native";
import Logo from "@/assets/images/adaptive-icon.png";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 10 }}>
      <Button
        title="Press"
        onPress={() => {
          console.log("button pressed!");
        }}
        color="midnightblue"
      />

      <Pressable
        onPress={() => console.log("image pressed")}
        onPressIn={() => {}}
        onLongPress={() => {}}
        onPressOut={() => {}}
      >
        <Image source={Logo} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Pressable onPress={() => console.log("text pressed")}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          sed, assumenda a cupiditate, impedit voluptatum veritatis similique
          quos sint explicabo debitis unde vel vitae expedita at repellat
          voluptatibus saepe. Sed! Nobis enim ullam earum cupiditate explicabo
          inventore doloremque impedit illum velit quibusdam laudantium hic,
          odio nemo. Itaque ex eos molestias iusto exercitationem, fuga ipsa
          delectus laboriosam labore, eaque accusamus suscipit! Vero ut
          aspernatur maxime itaque neque non harum illum molestias eveniet quasi
          deleniti quos laborum nostrum illo officia velit voluptates quam
          asperiores aliquam atque, tempora officiis facere similique quis.
          Explicabo. Ducimus sit esse velit animi cumque quas ex perspiciatis.
          Est facilis libero, voluptate exercitationem, quae animi nulla natus,
          alias maxime ducimus sit possimus officiis quibusdam non quod quas
          dolore totam? Quis minus, quasi molestias sed soluta voluptatibus
          mollitia cupiditate voluptatem officiis amet tempora natus atque est,
          consequuntur quia deleniti. Eaque vitae fugiat culpa exercitationem
          perferendis ducimus voluptates ipsum officiis excepturi. Culpa,
          tenetur qui! Aliquid, eum. Iusto nisi consectetur, voluptate rerum
          autem ab temporibus enim eveniet error quas itaque sed, asperiores,
          quae voluptas. Nulla at nostrum assumenda optio tempora neque et.
          Suscipit debitis, odio sint possimus sed, omnis voluptatibus tempora
          vel ea libero dolore ratione, minima consequuntur repellat? Quae
          reprehenderit dignissimos quibusdam odit qui provident, aliquam
          corrupti iure eius ipsam eligendi! Soluta, libero nulla temporibus, et
          ullam praesentium quam, repudiandae voluptates harum laborum non
          architecto possimus neque voluptas laboriosam consequuntur eos. Dolore
          a inventore deleniti, sit quibusdam vero! Dolor, praesentium
          provident? Ipsa aut expedita porro tempora? Tempora ab accusamus alias
          nemo natus sed numquam? Est, a nihil assumenda aut ad vitae unde
          necessitatibus maiores, quisquam, molestias libero ratione repellat!
          Officia, exercitationem. Distinctio aut cupiditate debitis voluptates
          magni velit consequuntur corrupti, quae odio sit dicta quas, quod
          sequi maiores id consectetur tempore omnis. Nihil ipsam iusto repellat
          modi fugit, eaque molestiae. Magni?
        </Text>
      </Pressable>
    </View>
  );
}
