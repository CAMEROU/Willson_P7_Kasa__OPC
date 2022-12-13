import Offers from "../../components/OffersBanner/Offer";
import Collapse from "../../components/Chevron/Collapse";
import aboutArray from "../../OfferDatas/aboutArray.json"; // j'ai créé un fichier JSON avec les données des collapses

export default function About() {
	return (
		<>
			<Offers />
			{aboutArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}
