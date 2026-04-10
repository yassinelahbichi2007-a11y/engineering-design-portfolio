// ==========================================
// PORTFOLIO CONTENT DATA
// ==========================================
// This file is your simple interface to edit the website content.
// Update the text, lists, and image paths below, and the website will automatically update.
// No other code changes are needed!

const portfolioData = {
    // ----------------------------------------
    // GLOBAL SETTINGS
    // ----------------------------------------
    siteName: "Engineering Portfolio",
    authorName: "Yassine Lahbichi",
    
    // ----------------------------------------
    // HOME PAGE
    // ----------------------------------------
    home: {
        hero: {
            name: "Yassine Lahbichi",
            role: "Engineering Science Student - University of Toronto",
            description: "This portfolio presents my engineering design work, focusing on design reasoning, decision processes, and verification rather than only final outcomes."
        },
        purpose: {
            title: "Purpose of this Portfolio",
            content: "This portfolio documents my development as an engineering designer through academic and technical projects. It focuses on how I approach engineering problems, structure design spaces, justify decisions, and evaluate solutions.",
            subContent: "This portfolio emphasizes:",
            bullets: [
                "Problem framing and requirement development",
                "Design space exploration and concept selection",
                "Engineering justification of decisions",
                "Verification and testing approaches"
            ],
            footer: "Projects are structured to highlight the reasoning behind design decisions and the evolution of concepts."
        },
        methods: {
            title: "Engineering Design Methods",
            content: "This portfolio applies structured engineering design methods (Core Technical Methods and Frameworks - CTMFs) to support rigorous design development and decision making.",
            subContent: "Methods presented across projects include:",
            bullets: [
                "Requirements engineering",
                "Evaluation criteria development",
                "Design space exploration",
                "Concept selection methods",
                "Verification planning",
                "Reference design analysis",
                "Prototyping approaches"
            ],
            footer: "Each project shows how these methods supported engineering decisions."
        },
        positionStatement: {
            title: "Engineering Position Statement",
            intro: "This statement outlines my approach to engineering design, my design priorities, and my continuous evolution as an engineer.",
            sections: [
                {
                    title: "On what engineering design is",
                    content: "Design is the act of making intentional choices toward an outcome that matters. That framing already excludes a lot: it rules out designing for novelty, for aesthetics alone, or for the sake of solving whatever problem happens to be in front of you. The choice of which problem to address is itself a design decision, and often the most consequential one. Understanding who is affected, and how, is what separates a solution that works from one that merely functions. A solution that doesn't outlast the moment it was built for hasn't really solved anything.<br><br>Engineering is what gives that process its discipline. It turns constraints into advantages — and that's a specific claim: constraints are the material, not the obstacle. A rule of nature tells you what's possible; a stakeholder constraint tells you what's necessary. Working within both is what gives a solution its integrity. Without constraints, there's no engineering; just speculation. So engineering design, taken together, is a structured process of making intentional choices under real constraints, toward outcomes that genuinely matter to the people they affect.",

                },
                {
                    title: "On service, systems, and iteration (Leo Club)",
                    content: "Running logistics for my <span style=\"position: relative; cursor: help; border-bottom: 1px dotted var(--blue-accent);\" title=\"Leo Club is a youth volunteering organization affiliated with Lions Club International. High school and university students join to run community service projects: fundraisers, clean-up initiatives, charity events, and so on. Members take on real leadership and logistics roles within the club. It's present in over 140 countries.\">Leo Club</span> made one thing clear: good intentions don't scale. When we decided to organize a forest clean-up, what first seemed like a simple act of service quickly became something more demanding. Mobilizing volunteers, coordinating equipment, assigning roles, maintaining safety, and adapting to conditions on the day are system problems, not goodwill problems. The forest clean-up looked simple until planning began, and then it became a real design challenge with real failure modes. The lesson was not that service is complicated, but that service done well requires the same structured thinking as any engineering project. The desire to resolve the issue has to be there, but desire alone produces nothing reliable.<br><br>That same experience taught me what iteration actually costs. Our first fundraising gala failed partly because of a sandstorm, and partly because the venue decision prioritized cost over accessibility. Both are design failures, but only one was unpredictable. Choosing a location far from the target audience to save money was an optimization on the wrong variable — the solution looked good on a spreadsheet and fell apart in reality. The second gala moved closer to the stakeholders; attendance improved, and so did everything downstream of it. That sequence — decision, failure, diagnosis, adjustment — is what iteration actually looks like. It's not a loop you run by choice; it's the only honest way to close the gap between what you designed and what the world needs."
                },
                {
                    title: "On responsibility, values, and why energy",
                    content: "Engineers choose their problems, and that choice carries consequences. The problems worth choosing are the ones where the impact is real and the need is genuine. This isn't idealism; it's a design criterion. Who benefits, and how much, and for how long, are measurable questions. An engineer who ignores them hasn't accounted for the full system.<br><br>Four values shape how I apply that criterion: long-term impact, service, sustainability, and teamwork. They determine which problems are worth framing, which tradeoffs are acceptable, and what counts as success. A solution that works today but degrades its environment or excludes the people it was meant to serve hasn't met the standard. Teamwork belongs here too as a structural requirement; no solution of any significance is built by one person, and designing without accounting for collaboration is designing for a condition that won't exist.<br><br>Energy is where those values converge into a specific direction. Energy is infrastructure for everything else. It determines whether a hospital can run, whether a school can stay lit after dark, whether a region can attract industry, or remain cut off from it. Instability in energy supply has historically preceded political instability, economic stagnation, and humanitarian crises. Working in energy means working on a problem whose solution propagates outward; every improvement compounds across sectors and populations. That's the most direct path from engineering work to large-scale human impact, and it's the clearest expression of the values I bring to design."
                },
                {
                    title: "On method, strategy, and process (basketball and the design loop)",
                    content: "Basketball is a constrained, dynamic environment where decisions have to be made faster than they can be fully reasoned through. What you develop is pattern recognition: reading the court, understanding where teammates will be, anticipating how defenders will respond. In a losing scenario, the instinct is to force the play — rush toward the winning point, increase pressure, act louder. The move that actually worked was the opposite: slow the pace, fade into the background, let the defense forget you, then receive the pass and score efficiently. That's a systems-level intervention. Rather than attacking the problem directly, you changed the state of the environment first.<br><br>The same instinct shows up in engineering. The impulse to force a solution is common and usually costly. Observing first, understanding the system, and acting at the point of least resistance tends to produce more durable outcomes. Being smart beats being loud.<br><br>That logic is what shaped my design loop. Each step depends on the previous one. Observation without alignment produces individual action that diverges from the team. Alignment without action is just agreement. Action without reflection produces repetition rather than improvement. Iteration without honest observation accelerates the same mistake. The loop only works if every step is taken seriously — and it only produces good outcomes if the team running it is functioning as one.",
                    visuals: [
                        {
                            caption: "",
                                                        contentHtml: `
<div class="design-loop">
  <div class="design-loop-track">
    <div class="design-loop-stage">
      <h3>OBSERVE</h3>
      <p class="design-loop-summary">Reading the environment before acting</p>
      <p class="design-loop-details">Stakeholders - Constraints - Context - Failure Points</p>
    </div>

    <div class="design-loop-connector" aria-hidden="true"></div>

    <div class="design-loop-stage">
      <h3>ALIGN</h3>
      <p class="design-loop-summary">Ensuring the team shares the same objective</p>
      <p class="design-loop-details">Communication - Shared Goals - Roles - Existing Solutions</p>
    </div>

    <div class="design-loop-connector" aria-hidden="true"></div>

    <div class="design-loop-stage">
      <h3>ACT</h3>
      <p class="design-loop-summary">Proposing and testing ideas strategically</p>
      <p class="design-loop-details">Concepts - Prototypes - Trade-offs - Structured Decisions</p>
    </div>

    <div class="design-loop-connector" aria-hidden="true"></div>

    <div class="design-loop-stage">
      <h3>REFLECT</h3>
      <p class="design-loop-summary">Honestly assessing what the outcomes revealed</p>
      <p class="design-loop-details">Performance - Lessons - Misconceptions - Gap Analysis</p>
    </div>

    <div class="design-loop-connector" aria-hidden="true"></div>

    <div class="design-loop-stage">
      <h3>ITERATE</h3>
      <p class="design-loop-summary">Refining decisions based on evidence</p>
      <p class="design-loop-details">Verification - Adjustment - Reliability - Improvement</p>
    </div>

    <svg class="design-loop-feedback" viewBox="0 0 100 68" preserveAspectRatio="none" aria-hidden="true">
      <path d="M 96 4 L 96 46 L 6 46 L 6 12" />
      <polygon class="feedback-head" points="6,2 2,11 10,11" />
    </svg>
  </div>

  <div class="design-loop-caption">
    <strong>Figure 1 — Design loop showing how structured observation, team alignment, and honest reflection drive continuous improvement toward justified decisions.</strong>
  </div>
</div>`
                        }
                    ]
                },
                {
                    title: "What's new: On teamwork as a design condition",
                    content: "No meaningful solution is built alone. It's a structural and practical observation about the nature of design itself. Designing in isolation doesn't just slow progress; it degrades the quality of the thinking. Two failure modes make this unavoidable.<br><br>The first is the blind spot problem. You cannot see your own idea from the outside. No matter how rigorously you reason through a concept, you are reasoning from inside it. Another person listening to that idea will catch limitations you've normalized, misconceptions you've built assumptions on top of, and improvements that only become visible from a different vantage point. That external perspective isn't a courtesy; it's a corrective mechanism the design process depends on.<br><br>The second is the interference problem. When team members develop their work in isolation, the outputs don't simply fail to add up — they conflict. Decisions made independently, without alignment, create friction at the integration point. The design absorbs the cost of its absence.<br><br>This is what the French expression captures: un esprit sain dans un corps sain — a healthy mind in a healthy body. The team is the body. The design is the mind. You cannot produce one without the other functioning well. A healthy team isn't a condition that makes design more pleasant; it's a condition that makes good design possible at all.<br><br>The same logic applies at the level of society. Organized human progress — the philosophical society, the city, the institution, or engineering teamwork — exists because individuals accepted that honoring their role within a shared system produces outcomes none of them could reach alone. Internal deadlines operate on exactly that principle. Meeting one isn't about personal discipline; it's about not introducing interference into a system others are depending on. Every person who does their part on time is maintaining the structural integrity of the collective effort.<br><br>That's the standard I hold myself to as a teammate, and the standard I expect a team to function by."
                },
                {
                    title: "The kind of engineer I want to become",
                    content: "Every argument in this position statement points to the same place.<br><br>Design is the act of making intentional choices toward outcomes that matter — and engineering is the discipline that makes those choices rigorous, grounding them in real constraints rather than speculation. The Leo Club taught me that desire without structure produces nothing reliable, and that the gap between a solution on paper and a solution in reality only closes through honest iteration. Basketball taught me that the best interventions often come from reading the system first and acting at the right moment rather than forcing the obvious play. My values — long-term impact, service, sustainability, and teamwork — determine which problems are worth framing in the first place. And teamwork, understood properly, is the structural condition that makes good design possible at all; not because the work is too large for one person, but because isolation degrades the thinking itself.<br><br>Energy is where all of this converges. It is infrastructure for everything else; the problem whose solution propagates outward across healthcare, education, stability, and opportunity. Working in energy means working at the intersection of technical rigor and genuine human consequence, which is exactly the intersection where I believe engineering should operate.<br><br>My position as a designer is rooted in service and guided by strategy. Service sets the direction: toward real needs, real people, real consequences. Strategy sets the method: structured, adaptive, evidence-driven, and never mistaking a good answer on a spreadsheet for a good answer in the world. Neither works without the other, and neither means anything without a team willing to hold the same standard.<br><br>That is the engineer I am working to become."
                },
                {
                    title: "Connection to the Rest of the Portfolio",
                    content: "The position statement above is the lens through which this portfolio should be read. Each project that follows demonstrates a different dimension of it in practice. The Adjustable Swimming Resistance System is where context awareness, stakeholder understanding, and structured decision-making under real constraints played out directly. The Matboard Bridge Structural Design is where iteration, failure, and evidence-based choice became concrete; the bridge either holds or it doesn't, and the design process has to account for that honestly. The RFID-based anti-theft system for the Chestnut residence gym is where stakeholder awareness and real-world constraint thinking came first; the problem lived inside a real human ecosystem, with real behavioral and operational constraints, and the design had to respect that before it could propose anything. Together, the three projects don't just demonstrate that engineering work was done; they show how the values and process described here were enacted, tested, and refined through real design experience."
                }
            ]
        },
        contact: {
            title: "Contact",
            email: "yassine.lahbichi@mail.utoronto.ca",
            linkedin: "https://www.linkedin.com/in/yassine-lahbichi-06a559243/"
        }
    },

    // ----------------------------------------
    // PROJECTS
    // ----------------------------------------
    projects: [
        {
            id: "proj-swimming", 
            title: "Adjustable Swimming Resistance System",
            description: "Wearable motor-driven drag module designed to deliver adjustable, repeatable swim resistance while preserving natural swimming biomechanics and training practicality.",
            detailedTitle: "Motor-Driven Adjustable Swim Resistance System",
            subtitle: "A ducted counter-rotating propeller device for precision drag control while preserving swimming biomechanics.",
            problemTitle: "Problem Context — Limitations of Existing Swim Resistance Training Methods",
            problem: `<p>Competitive swimmers often use resistance tools such as drag parachutes or tethered systems to increase training intensity. However, these existing solutions typically lack precise resistance control, interfere with natural swimming biomechanics, or require athletes to stop training to adjust settings.</p><p>This project focused on designing a compact wearable resistance module capable of generating controlled hydrodynamic drag while remaining practical for real training environments.</p>`,
            projectOverview: {
                title: "Engineering Objective — Developing a Biomechanically Compatible Adjustable Drag System",
                objectiveTitle: "Objective",
                objective: "The engineering challenge was to develop a wearable system capable of generating adjustable and repeatable drag forces while maintaining swimmer biomechanics, minimizing interference with stroke and kick motion, and remaining durable in a chlorine-exposed aquatic environment.",
                constraintsTitle: "Primary Design Requirements",
                constraints: [
                    "Generate adjustable and repeatable drag forces rather than a single fixed resistance level",
                    "Maintain swimmer biomechanics by aligning resistance with the body centerline",
                    "Minimize interference with arm stroke and kick motion during training",
                    "Remain durable and practical in a chlorine-exposed aquatic environment"
                ],
                contributionTitle: "Engineering Focus",
                contribution: "This work required combining fluid mechanics, mechanical design, packaging, and human-factors considerations into a single integrated system that could be worn during real swim training."
            },
            finalDesignSolution: {
                title: "Final Design Architecture — Ducted Motor-Driven Counter-Rotating Propeller Module",
                description: "The final design consists of a wearable resistance module mounted at the lower back that generates adjustable drag using a motor-driven propeller system. Resistance is produced by an electrically powered propeller enclosed inside a single protective duct, which serves both as a structural housing and as a safety feature preventing accidental contact with the rotating blades. To improve stability and eliminate unwanted rotational effects, the design uses a dual-propeller configuration mounted on the same axis. The two propellers rotate in opposite directions to cancel the reaction torque normally produced by a single propeller. This counter-rotating configuration allows the system to generate drag while maintaining rotational stability on the swimmer's body. The motor controls the rotational speed of the propellers, which directly determines the magnitude of the drag force. A rotary adjustment interface allows the swimmer to modify motor speed and therefore resistance intensity without interrupting training. The entire propulsion system is positioned near the pelvis to maintain alignment between the drag force and the swimmer's center of mass, reducing disturbances to natural swimming biomechanics. The device is connected through a harness system that distributes the drag forces across the torso to avoid localized loading and improve comfort during use.",
                keyDecisionsTitle: "Key Technical Elements",
                keyDecisions: [
                    "Motor-driven drag generation rather than passive fixed-resistance drag tools",
                    "Single duct propeller housing for user safety, structural containment, and flow guidance",
                    "Counter-rotating dual propellers for torque cancellation and rotational stability",
                    "Adjustable resistance through motor speed control using a manual dial interface",
                    "Torso-distributed attachment system with pelvis-mounted resistance module"
                ],
                reflection: "The selected architecture balanced hydrodynamic function, swimmer comfort, and practical adjustability by treating the drag module, controls, and attachment system as one integrated biomechanical system.",
                images: [
                    {
                        src: "Figures/F1-P2-onepager.png",
                        caption: "Figure 1 — Cutaway view of the ducted propulsion module showing the motor, gearbox, shaft, and counter-rotating propellers used to generate adjustable hydrodynamic resistance. CAD by Rhys Tuohy."
                    },
                    {
                        src: "Figures/F2-P2-onepager.png",
                        caption: "Figure 2 — Integrated system layout showing the battery housing, control electronics, and manual dial used to adjust motor speed and resistance levels. CAD by Rhys Tuohy."
                    },
                    {
                        src: "Figures/F3-P2-onepager.png",
                        caption: "Figure 3 — Attachment system concept showing distributed load transfer across the torso and pelvis-mounted resistance module to preserve natural swimming biomechanics."
                    }
                ]
            },
            verificationTesting: {
                title: "Prototype Verification — Usability and Biomechanical Compatibility Testing",
                theoreticalCapacity: "Verification focused on usability and biomechanical compatibility through proxy testing rather than full hydrodynamic performance characterization.",
                adjustedPrediction: "A control-interface prototype was built to evaluate whether resistance levels could be adjusted quickly through the rotary knob. Because this requirement depended primarily on user interaction rather than fluid forces, a simplified proxy setup was sufficient for early verification.",
                experimentalFailure: "Testing showed an average adjustment time of about 4 seconds, well below the 30-second requirement, demonstrating that the control interface was fast enough for realistic training use.",
                failureDescription: "Additional geometric mock-up testing was used to verify that the device did not interfere with swimmer motion by checking clearances and unintended contacts during simulated stroke movements.",
                reflection: "These early tests did not fully validate in-water drag performance, but they demonstrated that the concept was practical to adjust and could be packaged in a way that respected swimmer movement."
            },
            engineeringLearning: {
                title: "Engineering Results — Demonstrated Feasibility of a Wearable Adjustable Drag Device",
                intro: "This project demonstrated the feasibility of a wearable resistance device capable of combining hydrodynamic drag generation with biomechanical alignment and practical training usability.",
                principles: [
                    "Adjustable hydrodynamic resistance through motor-speed control",
                    "Biomechanically aligned force application through pelvis-centered mounting",
                    "Practical usability during training through fast on-body adjustment",
                    "Early-stage verification through proxy testing before full waterproof prototyping",
                    "Clear next-step pathway toward in-water drag measurement and durability validation"
                ],
                reflection: "Future work would focus on full waterproof prototyping, direct in-water drag measurements, and long-term chlorine-environment durability testing to convert this feasible concept into a fully validated training product."
            },
            designDecisions: [],
            evidenceImages: [],
            reflection: "",
            ctmfUsed: [
                { tabName: "CTMF 1 — Pairwise comparison", title: "Using pairwise comparison to converge between competing design directions", content: `<h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 0; margin-bottom: 0.5rem;">Observation — Screening concepts before selecting a design family</h3><p style="margin-top: 0;">After Beta, our team was still comparing several candidate concepts rather than refining one final solution. The main concepts still under consideration included the ducted propeller, drag panel, water weights, and resistance fins, which belonged to two broader design families: center-of-body designs and limb-attachment designs. At this stage, the project was not yet deciding between small feature variations, but between fundamentally different ways of generating resistance on a swimmer's body. This is shown in Figure 1, which presents the pairwise comparison matrix used to screen the candidate concepts.</p><br><img src="Figures/F1-P2-CTMF1.png" alt="Pairwise comparison matrix for swimming concepts" style="max-width: 82%; height: auto; margin: 16px auto; display: block;"><br><strong>Figure 1 — Pairwise comparison matrix used to screen candidate concepts.</strong><br><p><em>Note: This matrix was used as an initial screening step to compare individual concepts. It narrowed the design space, but did not by itself determine the final convergence decision.</em></p><br><p>However, the matrix alone did not fully solve the convergence problem. After screening the concepts, our team still needed to decide which design family offered the strongest direction for further development. To do this, we compared the remaining concepts at the family level using a pros-and-cons synthesis. As shown in Figure 2, this second comparison showed that center-of-body designs were more aligned with the main priorities of the project. They offered more consistent resistance output, better force balance across the swimmer's body, and less disruption to standard swimming biomechanics. In contrast, limb-attachment designs were easier to imagine and had stronger market precedent, but they introduced a greater risk of interfering with motion, creating imbalance, and producing less consistent drag.</p><br><img src="Figures/F2-P2-CTMF1.png" alt="Pros and cons synthesis for design families" style="max-width: 82%; height: auto; margin: 16px auto; display: block;"><br><strong>Figure 2 — Pros-and-cons synthesis used to compare the dominant design families.</strong><br><p><em>Decision: Converge toward center-of-body concepts for further development, retaining the propeller and panel concepts.</em></p><p><em>Note: After the initial concept screening, the remaining concepts were interpreted at the design-family level. This analysis drove the next convergence step by showing that center-of-body concepts better aligned with the project's priorities in biomechanics, balance, and consistent resistance generation.</em></p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Analysis — Realizing that pairwise comparison helps narrow the space, not finish the decision</h3><p>This experience helped me understand that pairwise comparison is most useful as a screening tool, not as a tool that automatically gives the final answer. Before this project, I mostly saw it as a way to rank concepts and move on. In Praxis II, I realized that its real value was helping us reduce the design space in a structured way without pretending that the decision was already finished.</p><br><p>That mattered because the limb-attached concepts, especially fins and water weights, felt more convincing at first since similar products already exist. But our reframed opportunity focused on creating a resistance system that was adjustable, individualized, safe, and efficient to use while reducing burden on the coach.</p><br><p>What I realized through this process is that convergence does not happen in one step. The pairwise matrix in Figure 1 helped narrow the concepts under discussion, but it did not answer the more important question: what kind of system should we keep developing? That became clearer in Figure 2, where the comparison shifted from individual concepts to design families. At that stage, center-of-body systems became more convincing because they better supported stable, controlled, and biomechanically compatible resistance generation. This is also reflected in our convergence notes, which linked center-of-body concepts to more consistent force output and better support from the pelvis, abdomen, and torso, while limb-attachment concepts were linked to greater imbalance and interference with movement.</p><br><p>This made me understand that convergence is not only about choosing the best final concept, but also about identifying the right design direction before refining details. In that sense, pairwise comparison did not choose the final design on its own. It helped structure the path toward a better decision.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Future Action — Separating screening and convergence more clearly in future projects</h3><p>In future projects, I would use pairwise comparison earlier when multiple fundamentally different design directions are still viable. Instead of waiting until concepts are already more developed, I would use it to screen architectures, placements, or mechanisms before too much time is spent refining weaker directions.</p><br><p>I would also make the transition between concept-level screening and family-level convergence more explicit from the start. In this project, that logic only became fully clear after separating the matrix from the later pros-and-cons synthesis. Doing this more intentionally in future projects would help prevent teams from treating pairwise comparison as a final answer, and instead use it as one step in a broader convergence process that stays aligned with the framed opportunity and requirements.</p>` },
                { tabName: "CTMF 2 — Rescope, reframe, and refine", title: "Using rescope, reframe, and refine to improve the project definition", content: `<h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 0; margin-bottom: 0.5rem;">Observation — Realizing that the original project framing was still too broad</h3><p style="margin-top: 0;">After Beta, our team realized that our project was still framed too broadly to guide the next design decisions well. We were still talking about adjustable resistance equipment for MSSAC swimmers in general, but the problem we had actually observed was much more specific than that. The most relevant context was the Friday morning training sessions, where swimmers were already fatigued, current resistance tools created interruptions, and the coach had to manage adjustments in a way that was too coach-focused.</p><br><p>To respond to this, our team applied a rescope, reframe, and refine process. As shown in Figure 1, we first rescoped the opportunity toward Friday morning trainees at MSSAC, then reframed it as creating an adjustable, individualized, safe drag resistance system with an efficient adjustment mechanism while reducing cognitive and logistical burden on the coach. This changed the project from a broad idea about variable resistance into a more specific engineering problem tied to an actual training situation.</p><br><img src="Figures/F1-P2-CTMF2.png" alt="Rescoped and reframed swimming opportunity" style="max-width: 82%; height: auto; margin: 16px auto; display: block;"><br><strong>Figure 1 — Rescoped opportunity and final reframe developed after Beta to better match the specific training context and the main stakeholder priorities.</strong><br><br><p>This change in framing also affected the requirements. As shown in Figure 2, Requirement 5 was refined from a limit on peak off-axis moment to a limit on peak off-axis trunk inclination. This shifted the requirement from something difficult to measure and justify in practice to something that better matched the swimmer-based context of the project and could be assessed more realistically through observation or video-based measurement.</p><br><img src="Figures/F2-P2-CTMF2.png" alt="Refined requirement for trunk inclination" style="max-width: 82%; height: auto; margin: 16px auto; display: block;"><br><strong>Figure 2 — Example of requirement refinement after Beta. Requirement 5 was changed from off-axis moment to trunk inclination so that it better matched the updated frame and could be verified more realistically and more clearly justified.</strong><br><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Analysis — Understanding that framing must improve the usefulness of the whole process</h3><p>This experience helped me understand that 3R is valuable not because it makes a project sound better, but because it changes what the project is actually asking us to design for. Before this, I mostly saw framing as something done near the beginning of the project. In Praxis II, I realized that if the scope stays too open, the team can continue making decisions that look reasonable but are still disconnected from the most important part of the situation.</p><br><p>That is what was starting to happen here. If we had kept the project at the level of "adjustable resistance for MSSAC swimmers," we could still have generated concepts and requirements, but they would have stayed too general. By rescoping toward Friday morning trainees and reframing around safety, individualization, adjustment efficiency, and reducing burden on the coach, the project became harder to misunderstand. Figure 1 shows this clearly, because the final version of the opportunity is much more specific about who the design is for and what problem it is trying to solve.</p><br><p>What I found most useful was the refine part, because it made this framing change visible in the engineering criteria themselves. Figure 2 is a good example of that. The original requirement on off-axis moment sounded technical, but it was not well matched to what we could realistically verify in a swimmer-based project. Replacing it with trunk inclination made the requirement more meaningful in context, because it connected the design more directly to swimmer balance and could actually be assessed in a credible way. That made me realize that a good requirement is not just technical-sounding. It has to fit the situation, the project resources, and the kind of verification the team can actually perform.</p><br><p>This changed how I see framing. I now see it less as a first step and more as something that determines whether later requirements, concepts, and tests are actually worth trusting.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Future Action — Using 3R as a deliberate checkpoint in future projects</h3><p>In future projects, I would use rescope, reframe, and refine more deliberately after early stakeholder research and before detailed concept development. At that point, I would ask whether the project is still too broad, whether the most important context has actually been identified, and whether the requirements reflect what matters most in that specific situation.</p><br><p>In particular, I would check whether some requirements only sound rigorous, or whether they are actually aligned with what the team can meaningfully justify and verify. This would help prevent later design work from being built on a problem definition that is still too vague.</p>` },
                { tabName: "CTMF 3 — Reference design", title: "Using reference designs to transfer proven principles into a new design context", content: `<h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 0; margin-bottom: 0.5rem;">Observation — Using a reference design to solve a weakness in the initial attachment concept</h3><p style="margin-top: 0;">At one stage of the project, our team planned to attach the resistance system using mainly a belt and shoulder straps. However, we realized that this approach could send too much drag force into the shoulders instead of distributing it across the swimmer's body. Since the device was meant to generate noticeable resistance during swimming, this raised a clear concern: if the load was transferred too locally, it could reduce comfort and disturb swimmer biomechanics.</p><br><p>To address this, we looked for a reference design that solved a similar force-distribution problem. The most useful one was a textile back-support exoskeleton, which used a wearable harness structure to spread forces across the torso rather than concentrating them at one attachment point. As shown in Figure 1, this reference helped us move from a simpler attachment idea toward a gilet-like wearable system with internal straps that distributes drag forces across the torso more effectively.</p><br><div class="evidence-gallery" style="margin-top: 16px; margin-bottom: 16px; grid-template-columns: 0.95fr 0.8fr; gap: 12px;"><div class="evidence-img-container"><img src="Figures/F1-P2-CTMF3-a.png" alt="Textile back-support exoskeleton reference" style="max-width: 115%; height: auto; margin: 0 auto; display: block;"><div class="evidence-caption">Reference design</div></div><div class="evidence-img-container"><img src="Figures/F1-P2-CTMF3-b.png" alt="Swimming wearable drag attachment concept" style="max-width: 35%; height: auto; margin: 0 auto; display: block;"><div class="evidence-caption">Transferred attachment concept</div></div></div><strong>Figure 1 — Transfer of a force-distribution principle from a textile back-support exoskeleton into the project's wearable drag system. The reference design informed the shift from a simpler belt-and-shoulder attachment idea toward a gilet-like support structure with internal straps that distributes drag forces across the torso instead of concentrating them at the shoulders.</strong><br><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Analysis — Realizing that reference designs are most useful when they improve weak parts of a concept</h3><p>This experience helped me understand that reference designs are most useful when they help solve a specific weakness in an existing concept. Before this, I mostly thought of reference designs as a way to get inspiration or generate ideas. In this case, the exoskeleton was more useful than that. It helped improve a concept that already existed by giving us a proven force-distribution principle that our initial attachment idea did not handle well.</p><br><p>What I found most useful was that we were not copying the reference design directly. We were extracting one important principle from it, distributing loads across the torso through a wearable support structure, and transferring that principle into a completely different design context. The original reference was for ergonomic support, while our project was about aquatic resistance training, but the functional problem was similar: how to transfer force into the body without concentrating it too much at one point.</p><br><p>This made me realize that a strong reference design is not valuable because it looks similar to the product being developed. It is valuable because it solves a similar functional problem in a credible way. In our project, the exoskeleton reference helped us move from a simpler but weaker attachment concept toward a more integrated and more biomechanically considerate one.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Future Action — Using reference designs to improve subsystem weaknesses</h3><p>In future projects, I would carry out reference-design research by searching for how a specific subsystem problem has already been solved, rather than limiting my research to products in the same industry. In this project, the most useful reference came from an exoskeleton rather than from swimming equipment, which showed me that secondary research is more useful when it is organized around the functional problem. This would help me use reference designs more deliberately to improve weak parts of a concept, not just to gather general inspiration.</p>` }
            ]
        },
        {
            id: "proj-bridge", 
            title: "CIV102 Bridge Design Project - Failure-Mode Driven Structural Optimization",
            description: "Design and analysis of a box-girder bridge using beam theory, failure analysis, and iterative structural optimization to maximize load capacity.",
            detailedTitle: "Matboard structural bridge designed using beam theory and plate buckling analysis.",
            heroImage: "bridge-hero.png",
            heroImageCaption: "Figure 1: Final bridge after fabrication demonstrating the optimized p-section structural design.",
            projectOverview: {
                objective: "This project involved designing a 1200 mm span bridge using only matboard and contact cement while maximizing load capacity through structural analysis and geometric optimization.",
                constraints: [
                    "Fixed material supply",
                    "Height limit of 200 mm",
                    "Minimum deck width of 100 mm",
                    "Required analytical load prediction"
                ],
                contribution: "I contributed to structural analysis, computational modeling, design iteration, engineering drawings, and fabrication of the final bridge."
            },
            finalDesignSolution: {
                image: "bridge-design-solution.png",
                imageCaption: "Figure 2: Final p-section geometry selected after structural iteration. Cross-section generation code by Oliver Dubois.",
                description: "The final design used a p-shaped cross-section with a reinforced compression flange and closely spaced diaphragms to balance bending resistance, buckling stability, and material efficiency.",
                keyDecisions: [
                    "Doubling compression flange thickness to delay buckling",
                    "Removing bottom flange to improve efficiency",
                    "Increasing height to increase moment of inertia",
                    "Reducing diaphragm spacing to improve shear buckling resistance"
                ],
                reflection: "This design reflects my approach of identifying governing structural limits and redistributing material to address the critical failure modes rather than uniformly increasing strength."
            },
            engineeringAnalysis: {
                image: "bridge-analysis.png",
                imageCaption: "Figure 3: Structural modeling showing shear force and bending moment distributions used to validate design capacity.",
                evaluationMethods: [
                    "Shear force diagrams",
                    "Bending moment diagrams",
                    "Buckling analysis",
                    "Factor of safety calculations"
                ],
                prediction: "Analysis predicted a maximum load of approximately 1053 N.",
                safetyFactor: "A factor of safety of 2 was applied to account for construction variability.",
                reflection: "This analysis demonstrates my reliance on quantitative modeling to guide design decisions while recognizing the need for safety factors to account for real construction uncertainty."
            },
            designProcess: {
                description: "The design evolved through an iterative process using MATLAB cross-section modeling and structural analysis to calculate the factor of safety for each possible failure mode. At each iteration, the governing failure mode was identified as the one with the lowest factor of safety, and the cross-section geometry was modified to increase its resistance, for example by increasing flange thickness to delay buckling or reducing diaphragm spacing to improve stability. This process was repeated until the safety factors became more balanced, leading to a more structurally efficient design where no single failure mode dominated the bridge performance. The design evolved through several iterations:",
                iterations: [
                    "Increased height to improve flexural capacity",
                    "Reduced web spacing to improve buckling behavior",
                    "Reduced diaphragm spacing from 400 mm to 150 mm",
                    "Adjusted flange thickness based on failure analysis"
                ],
                reflection: "This process shows how I approach engineering design as an iterative refinement process driven by governing physical limits rather than intuition alone.",
                image: "bridge-iteration-metrics.png",
                imageCaption: "Figure 4: Structural performance metrics used to guide design convergence."
            },
            verificationTesting: {
                theoreticalCapacity: "Theoretical capacity predicted: 1053 N",
                adjustedPrediction: "Adjusted prediction after applying a safety factor of 2 based on construction quality: ~526 N",
                experimentalFailure: "Experimental failure: ~510 N",
                failureDescription: "Failure occurred at a splice connection due to tension-shear failure.",
                reflection: "Observing a connection failure rather than global failure reinforced my understanding that engineering models must account for local details and construction realities.",
                image: "bridge-shear-envelope.png",
                imageCaption: "Figure 5: Bridge failure during load testing showing structural collapse at the predicted critical region."
            },
            engineeringLearning: {
                principles: [
                    "Rigor: Using analysis to justify decisions.",
                    "Iteration: Improving designs through failure-mode analysis.",
                    "Engineering judgment: Understanding limits of theoretical models.",
                    "Systems thinking: Recognizing how local connection behavior affects global performance."
                ],
                reflection: "This project shaped my design philosophy by reinforcing that engineering optimization must be guided by both analytical modeling and practical understanding of real structural behavior."
            },
            testingEvidence: {
                videoUrl: "https://youtu.be/eNNMuYWvVXE",
                imageCaption: "Figure 6: Experimental testing validating structural predictions."
            },
            overallReflection: {
                content: "This project illustrates my approach to engineering design as a process driven by identifying governing physical limits and systematically refining a design to address them. Rather than attempting to maximize strength globally, I focused on understanding which failure modes controlled performance and iterated the geometry to improve those specific weaknesses. For example, increasing bridge height improved bending resistance while reducing diaphragm spacing improved buckling resistance, showing how targeted modifications can significantly improve structural efficiency.\n\nThe comparison between analytical predictions and experimental results also shaped my understanding of the limitations of theoretical modeling. While calculations predicted a maximum load of about 1053 N, the adjusted prediction using a factor of safety closely matched the experimental failure around 510 N, reinforcing the importance of incorporating uncertainty into engineering decisions.\n\nMost importantly, the observed failure at a splice connection rather than a global structural mode highlighted how small construction details can govern overall performance. This experience reinforced my focus on considering load paths and real implementation constraints early in the design process rather than relying solely on idealized models.\n\nOverall, this project reflects my developing engineering philosophy: combining analytical rigor with practical judgment, and using iteration to move toward balanced, realistic, and efficient designs rather than theoretically optimal but impractical solutions."
            },
            problem: "...",
            designDecisions: [],
            evidenceImages: [],
            reflection: "",
            ctmfUsed: [
                { tabName: "CTMF 1 — Requirements", title: "Using requirements to frame the bridge as a constrained engineering system", content: `<h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 0; margin-bottom: 0.5rem;">Observation — How material and construction requirements shaped the design space</h3><p style="margin-top: 0;">During the CIV102 bridge project, I realized that the bridge was not simply a problem of maximizing strength. From the beginning, the project was framed by strict requirements on the available material system, the bridge geometry, and the loading conditions. The bridge had to span 1200 mm, satisfy fixed dimensional rules, provide an unobstructed train path, and be built within the limited matboard-and-glue system specified by the project handout. Because the handout also specified the material properties of both the matboard and the glue, these were not background details but active constraints that shaped the entire design process. Figure 1 shows part of the handout specifying key dimensional requirements, including the permitted bridge length, deck width, support height, and the need for a horizontal, unobstructed track.</p><br><img src="Figures/F1-CIV-CTMF1.png" alt="CIV102 handout dimensional requirements" style="max-width: 78%; height: auto; margin: 16px auto; display: block;"><br><strong>Figure 1 — Excerpt from the CIV102 handout showing key dimensional and track requirements that constrained the bridge geometry from the start of the project.</strong><br><br><p>This became especially visible in our iteration process. In our design report, each major change to the cross-section was not only a response to structural weakness, but also to the need to use material efficiently and remain buildable within the project constraints. For example, removing the bottom flange reduced material use, bringing the design to 59.21% of the available material, while still maintaining a predicted maximum load of 506 N, as shown in Figure 2. This showed that some design decisions were driven not only by failure modes, but also by the requirement to work efficiently within the limited matboard area. Later changes, such as increasing height or reducing diaphragm spacing, also had to be justified within the remaining material and the realities of fabrication. This made me understand the project as a constrained material-and-construction problem rather than a purely analytical optimization problem.</p><br><img src="Figures/F2-CIV-CTMF1.png" alt="Iteration 2 material efficiency metrics" style="max-width: 78%; height: auto; margin: 16px auto; display: block;"><br><strong>Figure 2 — Iteration 2 metrics from our design report showing that removing the bottom flange reduced material use to 59.21% while maintaining a predicted maximum load of 506 N, illustrating how material-efficiency requirements shaped design decisions.</strong><br><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Analysis — Requirements as a framing tool rather than a checklist</h3><p>This experience helped me understand that requirements are not simply conditions to verify at the end of a project. They are part of the framing process itself. In CIV102, the strongest requirement was not one isolated number, but the fact that all structural decisions had to fit inside a tightly prescribed system of span, material, glue behavior, dimensional limits, and construction feasibility. The Praxis crossover handout makes this especially clear by stating that design decisions should be made not only from the main project objective, but also from material and feasibility constraints.</p><br><p>Looking back, requirements helped me see that the "best" design was not the one with the highest theoretical capacity in isolation, but the one that best balanced load capacity, efficient use of matboard, and realistic construction. This changed how I understood framing. I had previously thought of framing mostly as identifying the problem and stakeholders. In this project, I saw that framing can also happen through technical requirements: by defining the boundaries of what counts as a valid design, requirements shape the design space before convergence even begins.</p><br><p>At the same time, this observation also revealed a limitation. Some fabrication-sensitive issues, especially those related to splice quality, glue execution, and construction tolerance, were harder to appreciate early in the analytical process. This means that even when the formal requirements are clear, some practical consequences of those requirements only become visible once the design is translated into a build plan and physical object.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Future Action — Making fabrication requirements explicit earlier</h3><p>In future design projects, I plan to treat fabrication-related constraints more explicitly as requirements from the beginning instead of letting them remain implicit behind the analytical work. More specifically, I would separate structural requirements from material-availability requirements and construction-feasibility requirements early in the project, so that the team can identify which ones are likely to dominate the design.</p><br><p>For a project similar to CIV102, I would also introduce a short requirement-mapping step before major iteration begins, where the team lists not only formal project constraints such as geometry and loading, but also derived requirements such as splice robustness, glue strategy, curing time, and tolerance to construction imperfections. This would help ensure that the framed problem reflects the full engineering situation rather than only the most visible analytical constraints.</p>` },
                { tabName: "CTMF 2 — Verification", title: "Using verification to guide disciplined bridge iteration", content: `<h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 0; margin-bottom: 0.5rem;">Observation — How verification guided each major design iteration</h3><p style="margin-top: 0;">During the CIV102 bridge project, verification was not something we only used at the end to confirm the final design. It was the main process that allowed our team to move from one iteration to the next. After each analysis, we identified the governing failure mode of the current bridge and then changed the geometry to improve that specific weakness. The project handout itself structured the design process in this way by asking teams to calculate applied stresses, compare them to the capacities of each failure mode, determine the overall factor of safety, and then continue the design by changing geometric parameters. Figure 1 shows one iteration from our design report in which compressive failure of the top flange was identified as the governing mode. The explanation below the table then shows how that verification result was interpreted to justify the next geometric modification.</p><br><img src="Figures/F1-CIV-CTMF2.png" alt="Verification table for bridge iteration" style="max-width: 78%; height: auto; margin: 16px auto; display: block;"><br><strong>Figure 1 — Factors of safety for one bridge iteration, with compressive failure of the top flange identified as the governing mode. The accompanying explanation shows how this verification result guided the next geometric modification.</strong><br><br><p>This pattern became very clear in our own report. When verification showed that case 1 plate buckling was limiting, we doubled the top flange thickness. When compressive weakness became more important, we increased the bridge height. Later, when shear buckling became limiting, we reduced the spacing between diaphragms. In this way, verification did not simply tell us whether the design was acceptable. It told us what needed to change next.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Analysis — Verification as a way to converge on the problem, then reopen the design</h3><p>This experience changed how I understood verification in engineering design. In this project, verification did more than narrow the design toward a final answer. By calculating the factor of safety for each failure mode, it showed which part of the current iteration was governing the design. That gave our team a clear basis for convergence, since we could focus on the most limiting weakness of the bridge instead of making broad changes based on intuition.</p><br><p>At the same time, once that weakness became visible, verification pushed us back into a more focused kind of divergence. We did not reopen the entire design space, but we did have to explore different geometric ways of improving that specific limit. In the iteration shown in Figure 1, for example, verification showed that compressive failure of the top flange still governed the design even after the geometric modification. This meant that the change could still be useful, since it improved efficiency, while leaving the main limiting failure mode unresolved. More broadly across the project, this same process repeated: once case 1 plate buckling was identified as governing, we explored a thicker top flange; when compressive weakness became more important, we reopened the design around bridge height; and later, when shear buckling became limiting, diaphragm spacing became the new parameter to reconsider. In this way, verification created a repeated loop between narrowing and reopening: it helped us converge on the current problem, then forced a new round of targeted design exploration around how to improve it.</p><br><p>What I found most important here is that verification did not make the process linear. Instead, it made the iteration more disciplined. Each analytical check reduced uncertainty by identifying the current limit of the design, but that same result also revealed where more exploration was needed. This helped me understand that convergence and divergence were not completely separate stages in CIV102. Verification linked them together by making each new design change more deliberate, more specific, and more justified.</p><br><p>At the same time, this experience also revealed a limitation. Verification depended on assumptions about ideal geometry, glue behavior, and construction quality. This made it very effective for comparing analytical bridge designs, but less effective at capturing fabrication-sensitive effects such as splice execution, glue coverage, and construction tolerance. This means that verification can strongly structure iteration, but its value still depends on how well the model represents the built bridge.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Future Action — Expanding verification to include fabrication uncertainty earlier</h3><p>In future design projects, I would continue using verification as the main tool for convergence, but I would make a more deliberate effort to include fabrication-related uncertainty earlier in the process.</p><br><p>For a project similar to CIV102, I would treat verification as both an analytical and fabrication-aware process by checking not only predicted failure modes, but also how sensitive the design is to workmanship, splice quality, glue execution, and small geometric imperfections before final convergence. I would also compare the ideal analytical result with a more conservative version of the same design so that the team can better judge how much performance depends on precise construction.</p><br><p>This would help ensure that verification remains connected not only to the mathematical bridge, but also to the physical one.</p>` },
                { tabName: "CTMF 3 — Physical prototype", title: "Using the physical prototype to reveal fabrication-sensitive design logic", content: `<h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 0; margin-bottom: 0.5rem;">Observation — How construction revealed that assembly order and splice placement mattered</h3><p style="margin-top: 0;">During the CIV102 bridge project, I realized that the bridge was not fully defined by its cross-section, calculations, or predicted failure load. Once construction began, the build itself introduced new engineering decisions that directly affected the final structure. One of the main issues our team faced was deciding on the assembly order. We were unsure whether to begin with the top flange and glue the diaphragms onto it first before attaching the legs, or instead to assemble the legs first, connect them with the diaphragms, and only then attach the top piece. Figure 1 shows the construction approach we used, where the diaphragms were first glued to one side of the bridge. In practice, this made it harder to keep the second side aligned with the same straightness and precision during later assembly.</p><br><img src="Figures/F1-CIV-CTMF3.png" alt="Construction-stage bridge assembly" style="max-width: 78%; height: auto; margin: 16px auto; display: block;"><br><strong>Figure 1 — Construction-stage photo showing diaphragms being glued to one side of the bridge first. This assembly sequence made alignment of the second side more difficult and revealed how construction order could affect the achieved geometry.</strong><br><br><p>Because we spent so much time thinking through this construction sequence, we overlooked another important fabrication detail: the placement of the two splice joints. Figure 2 shows that the bridge was intended to have the splices on opposite sides. In the final build, however, both splices ended up on the same side, which made that side weaker and contributed to the bridge's failure. This moment showed me that the physical prototype was not simply the final object submitted for testing. It was the stage where construction choices, glue logic, and fabrication attention directly influenced structural performance.</p><br><img src="Figures/F2-CIV-CTMF3.png" alt="Intended splice placement drawing" style="max-width: 78%; height: auto; margin: 16px auto; display: block;"><br><strong>Figure 2 — Elevation drawing of the intended bridge layout, showing the planned splice placement on opposite sides to avoid concentrating weakness in one region.</strong><br><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Analysis — Prototype as a test of whether the designed bridge could actually be achieved</h3><p>This experience changed how I understood the role of a prototype in engineering design. In this project, the prototype was not just a physical version of the bridge. It was the point where the design had to move from analytical intention into fabrication reality. On paper, the bridge could be represented through cross-sections, iteration tables, calculations, and drawings. In construction, however, the bridge became dependent on assembly sequence, glue execution, alignment, and splice placement.</p><br><p>What became most important to me was that the prototype revealed a gap between designed structural logic and achieved structural logic. Structurally, the bridge was intended to distribute weaknesses and connections in a controlled way. In the final build, however, the actual placement of the splices changed that logic by concentrating vulnerability on one side. This showed me that a design can appear sound analytically while still becoming weaker through the way it is assembled.</p><br><p>The prototype, therefore, did more than represent the design. It tested whether the design could actually be built as intended. It also showed that construction planning was part of the design itself. Assembly order was not just a practical issue to resolve after the calculations were complete. It shaped whether the intended geometry and connection logic could be achieved without introducing new weaknesses.</p><br><p>At the same time, this experience also revealed a limitation. Our construction plan was not explicit enough early on to protect against fabrication-sensitive mistakes. We had thought carefully about structural analysis, but not enough about how the bridge would actually be assembled step by step. This made the build process more reactive than it should have been and allowed an avoidable construction issue to affect the final structural outcome.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Future Action — Planning fabrication logic as part of the design earlier</h3><p>In future design projects, I would treat fabrication logic more explicitly as part of the design from the beginning instead of leaving it to be resolved during construction.</p><br><p>For a project similar to CIV102, I would plan the assembly sequence earlier and in parallel with the structural design rather than after the geometry is already finalized. I would also create a short construction checklist for fabrication-sensitive features such as splice locations, symmetry, joint sequence, glue-critical regions, and alignment checks before final assembly begins.</p><br><p>This would help ensure that the physical prototype remains consistent with the structural logic of the intended design rather than introducing weaknesses through avoidable construction decisions.</p>` }
            ]
        },
        {
            id: "proj-rfid", 
            title: "RFID Dumbbell Anti-Theft System (Chestnut Gym)",
            description: "Design of an RFID-based anti-theft system for gym equipment, focusing on stakeholder needs, system integration, and practical implementation constraints.",
            detailedTitle: "Praxis I Engineering Design Project - University of Toronto Engineering Science",
            heroImage: "Figures/F1-P1-onepager.png",
            heroImageCaption: "Figure 1 — Chestnut gym dumbbell storage area with incomplete weight sets, demonstrating the impact of equipment theft on gym availability.",
            projectOverview: {
                title: "Problem Identification & Design Motivation",
                objectiveTitle: "Context",
                objective: "During my first year at Chestnut Residence, I observed a recurring operational issue in the student gym: dumbbells were frequently disappearing, leading to incomplete weight sets and reduced equipment accessibility. While this initially appeared to be a management issue, it revealed a clear engineering opportunity: developing a system capable of monitoring equipment removal without disrupting normal gym usage.",
                constraintsTitle: "Key Design Objectives",
                constraints: [
                    "Detect unauthorized removal events",
                    "Preserve normal gym workflow",
                    "Ensure reliability with minimal maintenance",
                    "Enable scalable deployment in other facilities",
                    "Maintain dumbbell ergonomics and durability under repeated impacts",
                    "Achieve reliable detection despite the presence of large amounts of metal equipment"
                ],
                contributionTitle: "Design Challenge",
                contribution: "The core design challenge was therefore to create a solution that could detect unauthorized removal while remaining reliable, non-intrusive, and compatible with the existing gym infrastructure."
            },
            problem: "",
            finalDesignSolution: {
                title: "System Architecture & Operating Principle",
                image: "Figures/F3-P1-onepager.png",
                imageCaption: "Figure 3 — CAD Model of the installed RFID system with the dumbbell shown in blue and the RFID system shown in gray. CAD by Perry Xiu.",
                description: "The final design consists of an RFID-based monitoring system allowing passive detection of dumbbells leaving the gym. Each dumbbell is equipped with a passive RFID tag, while RFID reader antennas are positioned near the gym exit to monitor movement through a detection zone.",
                keyDecisionsTitle: "System Logic",
                keyDecisions: [
                    "Each dumbbell contains an embedded passive RFID tag",
                    "Exit readers continuously scan the detection region",
                    "When a dumbbell passes the exit, its tag is detected",
                    "The system records the event for monitoring purposes"
                ],
                reflection: "By focusing on detection rather than physical prevention, the design minimizes mechanical complexity while maintaining normal gym operation."
            },
            engineeringAnalysis: {
                title: "Design Requirements & Engineering Constraints",
                intro: "The primary objective of the project was to design a monitoring system capable of detecting dumbbell removal events while preserving usability and ensuring long-term reliability. The design also needed to remain scalable so it could realistically be deployed in other facilities.",
                image: "Figures/F2-P1-onepager.png",
                imageCaption: "Figure 2 — Decomposition of design requirements and evaluation criteria derived from the Chestnut gym anti-theft opportunity.",
                evaluationMethods: [
                    "Detect unauthorized removal events",
                    "Preserve normal gym workflow",
                    "Ensure reliability with minimal maintenance",
                    "Enable scalable deployment"
                ],
                prediction: "Important engineering constraints included maintaining dumbbell ergonomics, ensuring durability under repeated impacts, and achieving reliable detection despite the presence of large amounts of metal equipment.",
                safetyFactor: "These requirements established the performance criteria used to compare concepts and frame the final system architecture.",
                reflection: "The requirement structure clarified that the problem was not simply theft detection in the abstract, but reliable monitoring within a real, metal-dense gym environment."
            },
            designProcess: {
                title: "Major Design Decisions & Tradeoff Analysis",
                description: "Several important engineering tradeoffs shaped the design. RFID technology was selected because it provides passive identification without requiring user interaction, while also maintaining low maintenance requirements and strong scalability potential.",
                iterations: [
                    "Prioritized passive identification instead of user-dependent interaction",
                    "Selected detection over physical prevention mechanisms such as tethers or locking systems",
                    "Reduced failure modes by using passive tags",
                    "Minimized moving components to improve reliability"
                ],
                reflection: "A deliberate decision was also made to prioritize detection rather than physical prevention mechanisms. This approach reduced safety risks, avoided interference with exercise activities, and simplified system integration."
            },
            verificationTesting: {
                title: "Prototype Implementation & Technical Validation",
                theoreticalCapacity: "To evaluate the feasibility of the concept, low-fidelity prototypes were developed to test RFID detection and system integration strategies. Testing focused primarily on detection feasibility, environmental constraints, and practical integration considerations.",
                adjustedPrediction: "Testing confirmed that RFID (simulated by the NFC Tools on a phone) detection was technically feasible and that passive system architectures improved robustness.",
                experimentalFailure: "However, testing also revealed the importance of reader placement and highlighted environmental interference as an area requiring further validation.",
                failureDescription: "Limitations of the prototype included the absence of long-term durability testing, lack of full deployment validation, and incomplete characterization of environmental interference.",
                reflection: ""
            },
            engineeringLearning: {
                title: "Engineering Assessment & Solution Impact",
                intro: "This project demonstrates a practical engineering approach centered on solving a real operational problem through a balanced technical solution. The design leverages proven identification technology while carefully balancing usability, reliability, and implementation complexity.",
                principles: [
                    "Non-intrusive system behavior during normal gym usage",
                    "Relatively simple architecture with passive detection logic",
                    "Scalability potential for deployment in other facilities",
                    "Awareness of remaining uncertainties such as long-term RFID durability, metal-environment reliability, and deployment cost"
                ],
                reflection: "This project reflects my engineering approach, which emphasizes identifying real user problems, making requirement-driven decisions, balancing technical tradeoffs, and prioritizing practical implementation."
            },
            designDecisions: [],
            evidenceImages: [],
            reflection: "",
            ctmfUsed: [
                { tabName: "CTMF 1 — Team feedback", title: "Team feedback as an actualisation tool for self-awareness", content: `<h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 0; margin-bottom: 0.5rem;">Observation — How structured feedback revealed strengths and participation gaps</h3><p style="margin-top: 0;">During the team feedback activity following the Alpha Release, I became aware of how my participation patterns influenced the effectiveness of our design process. Structured peer feedback revealed two important aspects of my behaviour: my ability to critically identify inconsistencies in our design work, and my inconsistent engagement during certain divergence discussions.</p><br><img src="rfid-ctmf1-figure1.png" alt="Peer feedback inconsistencies" style="max-width: 100%; height: auto; margin: 16px 0;"><br><strong>Figure 1 — Peer feedback highlighting my ability to critically identify inconsistencies and unclear reasoning in the design process.</strong><br><br><p>At the same time, the feedback shown in Figure 2 revealed that although I contributed ideas during discussions, there were moments where I was less involved in shaping the overall project direction. This helped me recognize that inconsistent participation can reduce the effectiveness of divergence, since active engagement is necessary to fully explore the design space and maintain balanced collaboration.</p><br><img src="rfid-ctmf1-figure2.png" alt="Peer feedback participation" style="max-width: 100%; height: auto; margin: 16px 0;"><br><strong>Figure 2 — Peer feedback identifying inconsistent participation during team discussions.</strong><br><br><p>This observation helped me understand that engineering contribution is not only defined by the quality of ideas provided but also by the consistency of engagement throughout the design process. One limitation of this observation is that peer feedback reflects subjective perceptions rather than objective measurements of participation.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Analysis — Understanding my role in divergence and convergence through PIAA</h3><p>This experience helped me understand the value of structured reflection as a deliberate mechanism for improving engineering teamwork through the PIAA model. The PIAA cycle describes how designers move from Perceiving information, to Interpreting its meaning, Assessing its implications, and finally Acting to improve their approach.</p><br><p>During this activity, I first perceived new information about my behaviour through peer feedback. I then interpreted how these behaviours affected team performance, especially during convergence tasks requiring analytical review and divergence tasks requiring consistent participation.</p><br><p>Through the assessment stage, I recognized how my behaviour influenced design activities such as the Morph Chart and Pugh Chart development. My critical thinking helped improve solution evaluation, but my inconsistent engagement sometimes limited my contribution to broader team direction.</p><br><p>Finally, I acted on this understanding by taking greater responsibility for analytical tasks while making a conscious effort to remain engaged throughout discussions. This experience reinforced that effective engineering teams depend not only on technical contributions but also on consistent engagement and structured reflection.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Future Action — Improving consistency of engagement and reflective practice</h3><p>Moving forward, I plan to integrate structured reflection by proposing short 3-5 minute process check discussions after major milestones where each team member identifies one effective behaviour and one improvement area.</p><br><p>To improve my consistency of engagement, I will also ensure I actively contribute at least one idea or build on a teammate's idea during divergence discussions. Additionally, I will deliberately use my strength in critical evaluation by taking a more active role in questioning assumptions during convergence phases.</p><br><p>By introducing these small process adjustments, I aim to transform reflection into an active design tool that improves both my individual contribution and the team's decision quality.</p>` },
                { tabName: "CTMF 2 — Role of diverging process", title: "Breaking anchoring bias through divergence tools", content: `<h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 0; margin-bottom: 0.5rem;">Observation — Initial fixation and its impact on the design space</h3><p style="margin-top: 0;">At the beginning of our project, our team experienced anchoring bias by unintentionally framing the opportunity around a predefined technical solution: attaching RFID tags to dumbbells. Instead of defining the problem as reducing theft at Chestnut Gym, we implicitly defined it as improving theft detection performance.</p><br><p>This fixation became visible in our initial NGOs, which included an objective requiring a minimum theft-detection accuracy of 95%, directly derived from RFID technology rather than from the actual design need. As shown in Figure 1, this objective constrained our design space by assuming detection-based solutions were the only viable approach, preventing exploration of prevention or behavioural deterrence approaches.</p><br><img src="rfid-ctmf2-figure1.png" alt="Initial NGO anchoring bias" style="max-width: 100%; height: auto; margin: 16px 0;"><br><strong>Figure 1 — Initial NGO formulation demonstrating anchoring bias by constraining the design space to RFID-based detection solutions.</strong><br><br><p>During a studio review, our TA pointed out that our NGOs were not solution agnostic, which revealed how strongly we were anchored to our initial concept. However, simply recognizing this bias was not sufficient to overcome it, as our thinking remained influenced by the RFID approach.</p><br><p>The turning point came through structured divergence activities where we intentionally generated ideas without referencing RFID. This forced us to explore alternative approaches such as prevention mechanisms, gym layout modifications, and deterrence strategies. By expanding the range of concepts considered, divergence tools allowed us to re-examine our assumptions and reformulate our NGOs into more general objectives such as reliability of theft prevention rather than detection accuracy, as shown in Figure 2.</p><br><img src="rfid-ctmf2-figure2.png" alt="Revised NGO formulation" style="max-width: 100%; height: auto; margin: 16px 0;"><br><strong>Figure 2 — Revised NGO formulation illustrating how divergence enabled reframing toward solution-agnostic performance objectives.</strong><br><br><p>One limitation of this observation is that our realization of anchoring bias came through instructor feedback rather than internal detection, suggesting that additional structured bias-checking methods could further improve team independence in future projects.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Analysis — Divergence as a mechanism for overcoming cognitive bias</h3><p>This experience showed me that divergence is not only a creativity tool but also a corrective mechanism that helps teams overcome cognitive biases and reopen the design space. While I previously viewed divergence mainly as a way to generate more ideas, I now understand that its deeper purpose is to prevent premature commitment to early concepts.</p><br><p>In our case, anchoring bias reduced the effectiveness of our framing process because our objectives were unintentionally validating a specific solution rather than describing the real design need. Divergence helped correct this by forcing us to temporarily suspend our initial assumptions and explore alternative approaches. This demonstrated that divergence can act as a process safeguard, ensuring that teams evaluate the full design space before committing to specific solution paths.</p><br><p>This experience also helped me understand that framing and divergence are not strictly sequential steps in the FDCR model, but mutually reinforcing activities. Our framing only improved after we diverged widely enough to challenge our assumptions, showing that iteration between these strands is necessary for developing well-constructed NGOs and requirements.</p><br><p>This experience showed me that divergence is not only a creativity tool but also a corrective mechanism that helps teams overcome cognitive biases and reopen the design space. It also reinforced that framing and divergence are not sequential steps in the FDCR model, but mutually reinforcing activities that must sometimes be revisited to ensure the problem remains solution agnostic.</p><br><p>This experience highlighted that managing cognitive bias is as important as managing technical constraints in engineering design.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Future Action — Preventing anchoring bias through structured divergence</h3><p>In future projects, I plan to actively challenge early solution fixation by introducing short "problem reframing checkpoints" where the team must restate the opportunity without mentioning any proposed solutions. This would help verify that our objectives remain focused on the underlying need rather than on preferred technical directions.</p><br><p>I also plan to test our assumptions by briefly asking what completely different solution categories could exist (for example prevention vs detection vs behavioural solutions) before committing to any design direction. This would help ensure we are exploring the full design space rather than refining only one concept.</p><br><p>These practices would help me more intentionally monitor how early ideas influence decision-making and ensure that divergence remains focused on understanding the problem rather than validating initial solutions.</p>` },
                { tabName: "CTMF 3 — Brainwriting 6-3-5", title: "Using structured divergence to prevent premature convergence", content: `<h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 0; margin-bottom: 0.5rem;">Observation — How Brainwriting improved idea development and participation balance</h3><p style="margin-top: 0;">During one of our early divergence sessions, our team noticed that ideas were often interrupted or reshaped too quickly. As soon as someone began explaining a concept, another teammate would suggest improvements or alternatives. While well intentioned, this behavior caused premature convergence and prevented ideas from reaching sufficient development depth.</p><br><p>To address this issue, we intentionally applied structured diverging tools required in our design process. The method that proved most effective was the Brainwriting 6-3-5 diverging tool. Instead of verbal brainstorming, each teammate independently generated ideas and then passed them to others for further development.</p><br><img src="Figures/F1-P1-CTMF3.png" alt="Brainwriting 6-3-5 session notes" style="max-width: 100%; height: auto; margin: 16px 0;"><br><strong>Figure 1. Brainwriting 6-3-5 session notes showing iterative idea development and equal contribution structure.</strong><br><br><p>After several 6-3-5 rounds, every idea had been reviewed, interpreted, and expanded by each team member. This resulted in concepts that were not only more developed, but also reflected multiple perspectives rather than a single initial viewpoint.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Impact — Improving design space exploration and participation equity</h3><p>This exercise improved both participation equity and the technical depth of our design exploration.</p><br><p>Because the process required equal contribution from all members, it allowed quieter contributors, including myself, to participate more confidently without needing to compete for speaking time. This structured participation removed communication barriers and allowed ideas to be judged based on merit rather than presentation confidence.</p><br><p>Additionally, the tool prevented premature critique. Instead of immediately evaluating ideas, the structure forced us to first develop them. This separation between idea generation and idea evaluation allowed more technically credible and diverse concepts to emerge.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Analysis — Brainwriting as a process tool for improving divergence quality</h3><p>Analyzing this experience through the lens of diverging methods helped me understand why Brainwriting 6-3-5 and structured divergence tools are effective engineering practices rather than just teamwork techniques.</p><br><p>First, the process improved design space exploration quality. Because no idea could be immediately rejected, concepts evolved further before evaluation. This increased the probability of identifying non-obvious but promising solutions.</p><br><p>Second, the structure reduced cognitive bias and dominance effects. In unstructured discussions, strong personalities or early ideas can unintentionally anchor the design direction. Here, each idea developed independently before comparison, which maintained a broader solution space.</p><br><p>Third, this experience demonstrated that communication structure is itself a design tool. Engineering design is not only about technical decisions but also about how information and ideas are exchanged. By changing the communication structure, we directly improved the quality of technical outcomes.</p><br><p>Finally, I realized that divergence efficiency is not only about generating many ideas, but about ensuring ideas reach sufficient maturity before evaluation. The Brainwriting method improved both idea quantity and idea completeness.</p><br><h3 style="color: var(--blue-accent); font-family: var(--font-head); margin-top: 1.5rem; margin-bottom: 0.5rem;">Future Action — Applying structured divergence intentionally in future projects</h3><p>In future projects, I plan to improve divergence quality by introducing short "idea incubation" periods where concepts must first be written and expanded individually before any group discussion begins. This would help prevent strong personalities or early reactions from shaping ideas too quickly.</p><br><p>I also plan to experiment with delaying evaluation by requiring that each idea be improved at least once by another teammate before being compared to alternatives. This would help ensure that concepts are assessed based on their developed potential rather than their initial formulation.</p><br><p>Additionally, instead of selecting divergence tools by habit, I would choose them based on the type of exploration needed, for example using silent ideation tools when participation balance is critical and open discussion when refinement is needed.</p><br><p>This would allow me to more intentionally control how ideas evolve during divergence rather than relying on spontaneous team interaction patterns.</p>` }
            ]
        }
    ],

    // ----------------------------------------
    // REFERENCES
    // ----------------------------------------
    references: [
        {
            section: "Position Statement",
            items: [
                {
                    citation: "Previous Position Statement",
                    description: "Earlier version of the position statement used as a reference point for how the current portfolio framing and design philosophy evolved.",
                    link: "References/Previous Position Statement.pdf"
                }
            ]
        },
        {
            section: "CIV102 Bridge Project",
            items: [
                {
                    citation: "CIV102 Project Team 502 Design Calculations",
                    description: "Detailed bridge calculations used to evaluate failure modes, factors of safety, and iteration decisions in the CIV102 structural design project.",
                    link: "References/CIV102 Project Team 502 Design Calculations.pdf"
                },
                {
                    citation: "CIV102 Project Team 502 Design Report",
                    description: "Full CIV102 bridge design report documenting concept development, structural analysis, iteration logic, and final testing results.",
                    link: "References/CIV102 Project Team 502 Design Report.pdf"
                },
                {
                    citation: "CIV102 Project Team 502 Engineering Assembly",
                    description: "Engineering drawings and assembly documentation for the fabricated CIV102 bridge, including layout and construction planning details.",
                    link: "References/CIV102 Project Team 502 Engineering Assembly.pdf"
                }
            ]
        },
        {
            section: "RFID Anti-Theft Project",
            items: [
                {
                    citation: "Design Brief — Weight Theft in the Chestnut Gym",
                    description: "Problem brief framing the Chestnut gym dumbbell theft opportunity, stakeholder context, and early design motivation for the RFID anti-theft project.",
                    link: "References/Design Brief — Weight theft in the Chestnut gym.pdf"
                },
                {
                    citation: "Design Report",
                    description: "Project design report covering the RFID-based anti-theft system development, requirements, system architecture, and evaluation rationale.",
                    link: "References/Design Report.pdf"
                }
            ]
        },
        {
            section: "Adjustable Swimming Resistance Project",
            items: [
                {
                    citation: "RFP",
                    description: "Request-for-proposal style source document defining expectations, scope, and performance context for the adjustable swimming resistance project.",
                    link: "References/RFP.pdf"
                },
                {
                    citation: "SHOWCASE BINDER",
                    description: "Compiled showcase material containing presentation-ready project documentation and supporting design artifacts.",
                    link: "References/SHOWCASE BINDER.pdf"
                },
                {
                    citation: "Showcase One-Pager",
                    description: "One-page summary graphic used for project showcase communication and concise visual presentation of the design work.",
                    link: "References/Showcase One-Pager.png"
                },
                {
                    citation: "Showcase Poster",
                    description: "Poster-format project summary used for showcase presentation, consolidating visuals, problem framing, and solution overview.",
                    link: "References/Showcase Poster.png"
                }
            ]
        }
    ]
};



















