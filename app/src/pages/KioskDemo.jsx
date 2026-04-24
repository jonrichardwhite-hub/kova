import React, { useState } from 'react';
import {
  KioskHeader,
  ScriptCard,
  InfoPanel,
  ChatBubble,
  KioskCTA,
  ReplyChips,
} from '@ds/ui_kits/kiosk/Components.jsx';

export default function KioskDemo() {
  const [step, setStep] = useState(2);
  return (
    <div className="kiosk-stage">
      <div className="kiosk-device">
        <KioskHeader step={step} total={4} title="VERIFY" />
        <div className="kiosk-body">
          <div className="kiosk-greeting">Good morning, Alex.</div>
          <div className="kiosk-body-text">
            Two scripts are ready for collection. Tap a script to review its counseling notes.
          </div>

          <ScriptCard
            drug="Sertraline 50mg"
            generic="Zoloft (generic)"
            days={30}
            refills={2}
          />
          <ScriptCard
            drug="Atorvastatin 20mg"
            generic="Lipitor (generic)"
            days={90}
            refills={5}
          />

          <InfoPanel tone="info" label="COUNSELING">
            Sertraline may cause drowsiness for the first week. Avoid driving
            until you know how it affects you.
          </InfoPanel>

          <ChatBubble who="ai" name="QIRI · PHARMACIST AI">
            Any questions about these medications before you collect?
          </ChatBubble>

          <ReplyChips
            options={['How do I take it?', 'Side effects', "Talk to a pharmacist"]}
            onPick={() => {}}
          />

          <KioskCTA onClick={() => setStep((s) => Math.min(s + 1, 4))}>
            Confirm pickup
          </KioskCTA>
        </div>
      </div>
    </div>
  );
}
