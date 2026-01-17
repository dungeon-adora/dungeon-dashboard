import spellsList from "../../data/spellsList.json";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Wand2 } from "lucide-react";
import "./spellsComponent.scss";

interface Spell {
  title: string;
  level: number;
  tags: string[];
  description: string;
}

export const SpellsComponent = () => {
  return (
    <div className="spells-container">
      <Accordion type="single" collapsible className="spells-list">
        {spellsList.map((spell: Spell, index: number) => (
          <AccordionItem key={index} value={`spell-${index}`}>
            <AccordionTrigger className="spell-trigger">
              <div className="spell-title-row">
                <h3>{spell.title}</h3>
                <div className="spell-tags">
                {spell.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
                <span className="spell-level">Lvl {spell.level}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="spell-content">
              <p className="spell-description">{spell.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};