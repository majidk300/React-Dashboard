import { IoMail } from "react-icons/io5";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to us."
        />

        <SupportCard
          icon={BiSolidMessageRounded}
          leftComponent={
            <InfoCard
              inverted={true}
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortage, and corperate account services"
              tagText="Contact"
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
