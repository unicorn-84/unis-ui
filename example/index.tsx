import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Bar, Box, Container, Heading, Paragraph, Text, Link } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Bar
        as="header"
        maxWidth="lg"
        color="primary"
        padding={{ y: 'small' }}
        justify="space-between"
        align="center"
      >
        <Heading
          level="h2"
          variant="h2"
          style={{
            margin: 0,
          }}
        >
          Brand
        </Heading>
        <Box as="nav" gap="small">
          <Link>
            <Text variant="strong">Home</Text>
          </Link>
          <Link>
            <Text variant="strong">About</Text>
          </Link>
          <Link>
            <Text variant="strong">Services</Text>
          </Link>
          <Link>
            <Text variant="strong">Contact</Text>
          </Link>
        </Box>
      </Bar>
      <Container maxWidth="lg">
        <Box display="block">
          <Heading>Lorem, ipsum.</Heading>
          <Heading level="h2" variant="subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, veritatis?
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            dolorem unde repellendus eius voluptate debitis a, quod quae
            excepturi nulla! Laborum praesentium minima ad dolore voluptate
            explicabo esse exercitationem debitis, porro, et, voluptatibus hic
            tempora id sit quod at ullam ipsa vero! Amet recusandae ab
            necessitatibus consequatur sapiente enim, sit aliquam odit nostrum
            alias odio esse atque, explicabo repudiandae quis velit laboriosam
            voluptatem iure quisquam cum commodi? Natus quasi distinctio officia
            provident consequatur molestiae? Amet obcaecati officiis
            exercitationem, quidem id omnis temporibus modi tempora, mollitia
            enim qui. Sunt temporibus, numquam quidem tenetur ducimus
            reiciendis, culpa molestiae asperiores inventore eum provident quo
            cum voluptatum adipisci sit dicta nobis! Quia illo delectus facilis
            sunt at non ex minima rem, voluptas mollitia nam aliquid explicabo,
            et cum veniam. Enim necessitatibus praesentium et libero suscipit
            perferendis labore voluptate asperiores exercitationem ducimus
            dolores optio doloribus ullam id voluptatum, hic facere esse
            blanditiis laudantium illo dolorum? Rem vero cupiditate, accusamus
            modi, debitis placeat consectetur fugit suscipit alias dolore iusto.
            Hic cum, nam quis perspiciatis officia quasi! Incidunt consequuntur
            quasi libero quisquam labore. Modi molestiae quas amet? Blanditiis
            minus nam tempora quam. Culpa sint tempora laboriosam magnam omnis
            adipisci tenetur repellendus corporis ab saepe fugiat odit
            cupiditate necessitatibus nulla optio harum, soluta obcaecati,
            repudiandae labore. Veritatis, eaque iste quo recusandae illum
            molestiae ratione perspiciatis adipisci voluptates. Amet aspernatur
            debitis veritatis, non deleniti, dicta error delectus ex quaerat
            quia omnis nam, accusantium tempora voluptas iure officia mollitia
            eius ullam autem neque minima accusamus exercitationem. Natus
            dolores quidem, vitae possimus nesciunt ratione quae animi,
            quibusdam eligendi rerum expedita commodi perspiciatis officiis
            saepe minima officia molestiae vel similique voluptatibus! Inventore
            natus earum debitis iusto! Laborum eum nostrum aliquam ipsum maxime
            saepe soluta quia, deserunt cumque ea atque. Nulla aut,
            necessitatibus recusandae laboriosam velit tempore unde mollitia
            saepe eveniet totam quod reiciendis dolores incidunt? Deleniti iure
            tenetur quo. Ab velit quae, ad qui voluptates dolor repudiandae
            pariatur atque quaerat vitae ea commodi expedita laboriosam aliquam
            ratione id autem adipisci laudantium ipsum? Odio, et perferendis
            nam, aliquid laudantium dignissimos culpa accusantium quod libero,
            hic minus rerum. Reprehenderit eveniet hic aspernatur, eum cumque
            expedita repudiandae beatae sapiente ea veniam nihil alias aut nisi
            totam accusantium quo aperiam? Debitis, et? Saepe distinctio enim
            quas sed sunt necessitatibus officiis reiciendis laudantium
            accusamus laboriosam! Ratione libero et molestiae asperiores illum
            excepturi cum perferendis voluptatem. Reiciendis, totam sed! Nobis,
            dignissimos impedit explicabo provident eveniet quia nulla corrupti
            quibusdam tempore architecto modi nemo quas amet consectetur natus
            nam ipsum delectus aliquid labore consequatur. Dolorem numquam
            voluptatem, tempora sint modi ab dolorum deleniti quaerat sunt
            suscipit, placeat officia! Repellat minus eius nobis obcaecati,
            quidem nam voluptate, alias eligendi quae accusamus, ducimus fugit
            iusto necessitatibus est atque temporibus. Quasi doloremque laborum
            quam consectetur a, optio corporis impedit animi culpa nihil minima
            vitae, cum in cupiditate beatae eum placeat officia libero illo
            repellat iusto fugit repudiandae? Vero quas ipsum molestias
            blanditiis vel culpa, architecto aliquid voluptatum quia fugit, nam
            in dolorem vitae doloremque! Eveniet unde tempore ipsa error
            architecto a quaerat, at quod voluptates odit sunt officia corporis
            id culpa earum mollitia repudiandae sed rem assumenda beatae
            perferendis delectus pariatur atque? Minima facilis laborum libero
            eum recusandae explicabo, quaerat vero culpa doloremque cupiditate
            impedit eveniet quia voluptatum corrupti itaque sed nam assumenda
            inventore deleniti. Dolor hic soluta voluptatibus cum eius
            consectetur consequatur ea, sed ipsam commodi ipsum deserunt.
            Excepturi, exercitationem! Mollitia et, repellendus hic ex sapiente
            facere laborum quibusdam est assumenda earum temporibus accusamus
            distinctio quas voluptatum laudantium magni, alias vero quo
            blanditiis odio? Laboriosam porro, beatae eveniet nam odio commodi
            harum voluptatibus molestias odit laborum, dicta exercitationem
            error at veritatis qui rerum ad quia architecto blanditiis vel
            accusantium. Enim temporibus dolorem aliquid quo ullam. Nobis, eos
            molestiae sint nulla sit neque odio provident reiciendis, rem eum
            dolores distinctio earum? Veritatis architecto praesentium modi quae
            amet minima molestiae aspernatur culpa quidem sed, laboriosam sequi
            quasi ipsum, expedita voluptate! Tempora beatae aliquid recusandae
            ab laboriosam nulla placeat blanditiis neque molestiae adipisci,
            repudiandae minus dicta officiis, ad veniam ratione numquam totam
            excepturi quam libero quibusdam voluptatibus delectus. Nulla est eum
            id minus, magni labore sapiente culpa porro, eveniet nisi dicta.
            Nam, facere quasi? Pariatur, sint ad consequatur ipsum natus in
            porro! Saepe eveniet praesentium laboriosam, corporis sequi
            delectus, consectetur iusto repellendus adipisci, similique ducimus?
            Eos exercitationem culpa minima eius nostrum facilis adipisci illo
            autem ad provident hic, corrupti blanditiis, et porro, assumenda
            ipsum praesentium dicta ducimus earum! Error voluptate aliquid
            aliquam adipisci suscipit fuga tenetur tempora deserunt repellat
            eius, eveniet commodi temporibus in dolore ex veniam vitae
            voluptatibus repudiandae rem dolores ad? Est dicta illum fugiat eos,
            saepe architecto iure aut eaque cupiditate. Vel ut fuga blanditiis
            debitis sit accusantium! Ut in, sunt harum fugit ducimus architecto
            expedita molestias nihil, quasi exercitationem sequi qui quaerat
            voluptatibus sit repellat aut cumque libero maiores nemo. In nostrum
            architecto dolore aliquam voluptatem assumenda a dolorum tempora!
            Nulla expedita aperiam sunt aliquid impedit id blanditiis inventore
            saepe hic. Quos perferendis repellendus voluptate, nam animi omnis
            enim pariatur a accusantium maiores laboriosam corporis iure quaerat
            sit quia! Voluptas hic reiciendis nesciunt doloribus quia, numquam
            sapiente fuga aperiam vero ducimus repellat blanditiis earum alias
            esse ut dolorum illum dolores ipsum. Unde voluptate odit ullam
            voluptates quod. Ut tempore doloribus itaque accusantium deleniti
            adipisci voluptates dolores rem ex odio debitis reiciendis dicta
            dolorum, a ullam atque. Enim veritatis harum perferendis dignissimos
            unde incidunt consequatur, dolores, similique voluptatum nisi magnam
            ex provident deserunt distinctio reprehenderit, assumenda vero
            necessitatibus. Delectus corrupti laboriosam iusto. Labore culpa a
            vitae aliquam sapiente iusto tempora? Illum voluptatem dolor nemo
            recusandae tempora nobis dolorum in officia nesciunt, numquam iusto
            eaque iste incidunt optio ut deserunt unde repellendus aliquid id
            perferendis magni velit? Odit maiores excepturi consequatur commodi
            aliquid alias minus perferendis, quidem laboriosam in porro quis.
            Saepe ipsam perferendis fugiat molestias iusto omnis consequuntur,
            eius porro consectetur eveniet quo ducimus eum necessitatibus
            repellat deleniti obcaecati dicta placeat sequi! Corporis sequi,
            laudantium, voluptatem ipsa praesentium nemo dolores dolorum id
            ratione quasi exercitationem, eius repellat facilis quam. Nam,
            officiis.
          </Paragraph>
        </Box>
      </Container>
      <Bar
        as="footer"
        maxWidth="lg"
        color="dark"
        padding={{ y: 'small' }}
        justify="center"
        align="center"
        direction="column"
      >
        <Text variant="text">unis 2021</Text>
        <Text variant="text">Menu</Text>
      </Bar>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
