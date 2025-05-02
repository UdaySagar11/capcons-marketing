import React from "react"
import RoundedBottom from "@/components/common/rounded-bottom"
import { Banner } from "@/components/common/banner"
import { GetStarted } from "../_components/get-started"

export default function TermPage() {
    return (
        <div className="font-montserrat overflow-x-hidden">
            <Banner
                title="Terms and conditions"
                description="By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable laws."
                subtitle="Last Updated  23rd May, 2024"
            />
            <div className="relative pb-0">
                <div className="mt-8 md:mt-16 md:px-0 container max-w-6xl">

                    <article className="  prose-a:text-primary space-y-12 text-[#400E4D] ">
                        <h2 className="text-lg md:text-xl font-semibold mb-4">Capcons!</h2>
                        <p className="text-sm md:text-base leading-relaxed">
                            {`Capcon, an exciting new platform where you can connect with your
               friends and family, by allowing you to create your own circle. If you
               are a content creator, you may also monetize your network, as well as
               other cool features. The following Terms of Use constitute a legally
               binding contract (the "Terms") that govern the Capcons platform which
               offers membership programs provided`}{" "}
                            <strong>
                                {`by CAPCONS ANALYTICS PRIVATE LIMITED and CAPCONS INC. ("Capcons",
                   "we", "our") to you ("you" or "yours" or "User(s)")`}
                            </strong>
                            {`By creating a Capcons account, whether through a mobile device,
               mobile application or computer (collectively, the "Service") you
               accept without modification of all of the terms and conditions
               contained herein and you agree to be bound also by other policies and
               procedures, including, without limitation, Privacy Policy and Cookies
               Policy. Those policies include additional terms and conditions which
               apply to the Service and are an integral part of these Terms. YOUR USE
               OF THE SERVICE CONSTITUTES YOUR ACCEPTANCE OF AND THE TERMS TO BE
               BOUND BY OUR TERMS OF SERVICE. If you do not agree to these Terms, do
               not use the Capcons App and/or our website [insert website domain]
               (the "Site").`}
                        </p>

                        <p className="text-sm md:text-base leading-relaxed">{`If you use our Service, you are considered a "User".`}</p>

                        <h2 className="text-lg md:text-xl font-semibold mb-4">The Capcons Service</h2>
                        <ul className="list-decimal pl-6 space-y-2" >
                            <li className="text-sm md:text-base leading-relaxed">
                                {` We agree to provide you with the Capcons Service. The Service
                   includes all of the Capcons products, features, applications,
                   services, technologies and software that we provide to advance
                   Capcons' mission: To bring you closer to your friends and family by
                   creating your own circle.`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`Creating your own circle will give you the ability to post photos
                   and status updates to your audience, with may include your friends
                   and family, or to other interest-based communities.`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {` A circle has multiple features such as: (i) allowing you to go live
                   and notifying the people in your own circle; (ii) allowing you to
                   offer courses, podcasts, share pictures and videos, run
                   hackathons/content/polls with your circle members. For additional
                   details of how circles work, please visit the products and features
                   provided on the Site and in the Capcons application.`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`We reserve the right to modify, terminate or otherwise amend our
                   offered features, software, subscription plans and promotional
                   offerings at any time.`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`  Our basic Service does not require payment ("Free Subscription"). To
                   access more additional Services, you will have to pay before you can
                   access them ("Paid Subscription"). Plans of subscriptions together
                   are referred to as "Subscription Plans", individually each –
                   "Subscription Plan". At its discretion, Capcons may offer multiple
                   types of Subscription Plans and reserves the right to modify,
                   terminate, or otherwise amend features included in any of the
                   Subscription Plans at any time. For additional details of the
                   Subscription Plans, please visit the products and features provided
                   on the Site and in the Capcons application.`}
                            </li>
                        </ul>

                        <h2 className="text-lg md:text-xl font-semibold mb-4">Access and Eligibility</h2>
                        <p className="text-sm md:text-base leading-relaxed">
                            {` You are not authorized to create an account or access or use the
               Service or systems it resides on unless all of the following are true:`}
                        </p>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li className="text-sm md:text-base leading-relaxed">{`you are at least 18 years of age;`}</li>
                            <li className="text-sm md:text-base leading-relaxed">{`you can form a binding contract with Capcons;`}</li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`you are not a person who is barred from using the Service under the
                   laws of the United States or any other applicable jurisdiction (for
                   example, you do not appear on the U.S. Treasury Department's list of
                   Specially Designated Nationals or face any other similar
                   prohibition);`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {` you will comply with this Agreement and all applicable local, state,
                   national and international laws, rules and regulations; and`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`you have never been convicted of a felony or indictable offense (or
                   crime of similar severity), a sex crime, or any crime involving
                   violence, and that you are not required to register as a sex
                   offender with any state, federal or local sex offender registry.`}
                            </li>
                        </ul>

                        <h2 className="text-lg md:text-xl font-semibold mb-4">Modifying the Service and Termination</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li className="text-sm md:text-base leading-relaxed">
                                {`Capcons is always striving to improve the Service and bring you
                   additional functionality that you will find engaging and useful.
                   This means we may add new product features or enhancements from time
                   to time as well as remove some features, and if these actions do not
                   materially affect your rights or obligations, we may not provide you
                   with notice before taking them. We may even suspend the Service
                   entirely, in which event we will notify you in advance unless
                   extenuating circumstances, such as safety or security concerns,
                   prevent us from doing so.`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`You may terminate your account at any time, for any reason, by
                   following the instructions in "Settings" in the Service. Capcons may
                   terminate your account at any time without notice if it believes
                   that you have violated these Terms. Upon such termination, you will
                   not be entitled to any refund for purchases.`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`For residents of the Republic of Korea, except in the case where we
                   reasonably consider that (i) giving notice is legally prohibited
                   (for instance, when providing notice would either violate applicable
                   laws, regulations, or orders from regulatory authorities or
                   compromise an ongoing investigation conducted by a regulatory
                   authority) or (ii) any notice may cause harm to you, third parties,
                   Capcons, and/or our affiliates (for instance, when providing notice
                   harms the security of the Service), we will without delay notify you
                   of the reason for taking the relevant step.`}
                            </li>
                        </ul>

                        <h2 className="text-lg md:text-xl font-semibold mb-4">Safety and Your Interactions with Other Members</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li className="text-sm md:text-base leading-relaxed">
                                {`Though Capcons strives to encourage a respectful member experience,
                   Capcons is not responsible for the conduct of any member on or off
                   of the Service. You agree to use caution in all interactions with
                   other members, particularly if you decide to communicate off the
                   Service. In addition, you agree that you will not provide your
                   financial information (for example, your credit card or bank account
                   information), or wire or otherwise send money to other members.`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS.
                   YOU UNDERSTAND THAT CAPCONS DOES NOT CONDUCT CRIMINAL BACKGROUND
                   CHECKS ON ITS MEMBERS OR OTHERWISE INQUIRE INTO THE BACKGROUND OF
                   ITS MEMBERS. CAPCONS MAKES NO REPRESENTATIONS OR WARRANTIES AS TO
                   THE CONDUCT OR COMPATIBILITY OF MEMBERS.`}
                            </li>
                        </ul>

                        <h2 className="text-lg md:text-xl font-semibold mb-4">Community Rules</h2>
                        <p className="text-sm md:text-base leading-relaxed">{`By using the Service, you agree that you will not:`}</p>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li className="text-sm md:text-base leading-relaxed">
                                {`  use the Service for any purpose that is illegal or prohibited by
                   these Terms;`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">{`use the Service for any harmful or nefarious purpose;`}</li>
                            <li className="text-sm md:text-base leading-relaxed">{`use the Service in order to damage Capcons;`}</li>
                            <li className="text-sm md:text-base leading-relaxed">{`spam, solicit money from or defraud any members;`}</li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {` impersonate any person or entity or post any images of another
                   person without his or her permission;`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`bully, "stalk", intimidate, assault, harass, mistreat or defame any
                   person;`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`post any Content that violates or infringes anyone's rights,
                   including rights of publicity, privacy, copyright, trademark or
                   other intellectual property or contract right;`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`post any Content that is hate speech, threatening, sexually explicit
                   or pornographic;`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`post any Content that incites violence; or contains nudity or
                   graphic or gratuitous violence;`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {` post any Content that promotes racism, bigotry, hatred or physical
                   harm of any kind against any group or individual;`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {` solicit passwords for any purpose, or personal identifying
                   information for commercial or unlawful purposes from other members
                   or disseminate another person's personal information without his or
                   her permission;`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {`use another member's account, share an account with another member,
                   or maintain more than one account;`}
                            </li>
                            <li className="text-sm md:text-base leading-relaxed">
                                {` create another account if we have already terminated your account,
                   unless you have our permission.`}
                            </li>
                        </ul>
                        <p className="text-sm md:text-base leading-relaxed">
                            {`Capcons reserves the right to investigate and/or terminate your
               account without a refund of any purchases if you have violated these
               Terms, misused the Service or behaved in a way that Capcons regards as
               inappropriate or unlawful, including actions or communications that
               occur on or off the Service.`}
                        </p>
                        <p className="text-sm md:text-base leading-relaxed">
                            {`Although Capcons reserves the right to review and remove Content that
               violates these Terms, such Content is the sole responsibility of the
               member who posts it, and Capcons cannot guarantee that all Content
               will comply with these Terms. If you see Content on the Service that
               violates these Terms, please report it within the Service or via our
               support e-mail: support@capcons.com.`}
                        </p>

                        <section>
                            <h2 className="text-lg md:text-xl font-semibold mb-4">
                                Notice and Procedure for Making Claims of Copyright Infringement
                            </h2>
                            <p className="text-sm md:text-base leading-relaxed">
                                {`If you believe that your work has been copied and posted on the
                   Service in a way that constitutes copyright infringement, please
                   submit a takedown request within the Service or via our support
                   e-mail:`}{" "}
                                <a href="support@capcons.com">support@capcons.com</a>
                            </p>

                            <p className="text-sm md:text-base leading-relaxed">
                                {` If you contact us regarding alleged copyright infringement, please
                   be sure to include the following information:`}
                            </p>
                            <ul className="list-decimal pl-6 space-y-2">
                                <li className="text-sm md:text-base leading-relaxed">
                                    {` An electronic or physical signature of the person authorized to
                       act on behalf of the owner of the copyright interest;`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`A description of the copyrighted work that you claim has been
                       infringed;`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`A description of where the material that you claim is infringing
                       is located on the Service (and such description must be reasonably
                       sufficient to enable us to find the alleged infringing material);`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`Your contact information, including address, telephone number, and
                       email address, and the copyright owner's identity;`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`A written statement by you that you have a good faith belief that
                       the disputed use is not authorized by the copyright owner, its
                       agent, or the law;`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`A statement by you, made under penalty of perjury, that the above
                       information in your notice is accurate and that you are the
                       copyright owner or authorized to act on the copyright owner's
                       behalf.`}
                                </li>
                            </ul>
                            <p className="text-sm md:text-base leading-relaxed">Capcons will terminate the accounts of repeat infringers.</p>
                            <h2 className="text-lg md:text-xl font-semibold mb-4">Limitations of Liability</h2>
                            <ul className="list-decimal pl-6 space-y-2">
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`You understand that our Service is provided "as is," with all
                       faults and without any warranty (express or implied). TO THE
                       FULLEST EXTENT PERMITTED BY LAW, WE ARE EXPRESSLY DISCLAIMING ANY
                       AND ALL WARRANTIES OR CONDITIONS OF NON-INFRINGEMENT,
                       MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE, AS WELL AS
                       ANY WARRANTIES OR CONDITIONS IMPLIED BY A COURSE OF PERFORMANCE,
                       COURSE OF DEALING, OR USAGE OF TRADE, CONCERNING OUR SERVICE. SOME
                       JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR
                       CONDITIONS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {` Our liability is limited according to the provisions of these
                       Terms. To the fullest extent permitted by law, you release us from
                       any claims and demands, as well as any damages, losses,
                       liabilities, judgments, costs, reasonable attorneys' fees, and
                       other expenses incurred or suffered by Capcons of every kind and
                       nature, known and unknown, relating to or arising out of any
                       right, claim, or matter (a) which is disclaimed by Capcons (or for
                       which Capcons provides no guarantees) under these Terms, or (b)
                       for which Capcons is otherwise indemnified or released by you
                       under these Terms. Notwithstanding the aforementioned, Capcons'
                       liability to pay damages for any losses incurred by you as a
                       result of a breach of contract, negligence or other tort committed
                       by Capcons, regardless of the theory of liability asserted, is
                       limited to no more than the total amount of the most recent three
                       (3) months of Paid Subscription fees paid under these Terms.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`You expressly agree that you assume all risks in connection with
                       your access to and use of Capcons and the Site. Additionally, you
                       expressly waive and release us from any and all liability, claims,
                       causes of action, or damages arising from or in any way relating
                       to your access to and use of Capcons and the Site.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`Capcons and the Site may not be available or appropriate for use
                       in all jurisdictions. By accessing or using Capcons and the Site,
                       you agree that you are solely and entirely responsible for
                       compliance with all laws and regulations that may apply to you.
                       You further agree that we have no obligation to inform you of any
                       potential liabilities or violations of law or regulation that may
                       arise in connection with your access and use of Capcons and the
                       Site and that we are not liable in any respect for any failure by
                       you to comply with any applicable laws or regulations.`}
                                </li>
                            </ul>

                            <h2 className="text-lg md:text-xl font-semibold mb-4">Third Party Services</h2>
                            <p className="text-sm md:text-base leading-relaxed">
                                {`The Service may contain advertisements and promotions offered by
                   third parties and links to other web sites or resources. Capcons is
                   not responsible for the availability (or lack of availability) of
                   such external websites or resources. If you choose to interact with
                   the third parties made available through our Service, such party's
                   terms will govern their relationship with you. Capcons is not
                   responsible or liable for such third parties' terms or actions.`}
                            </p>

                            <h2 className="text-lg md:text-xl font-semibold mb-4">Indemnification</h2>
                            <p className="text-sm md:text-base leading-relaxed">
                                {`To the fullest extent permitted by law, you will defend,
                   indemnify, and hold Capcons harmless from any claim or demand made
                   by any third, as well as any damages, losses, liabilities,
                   judgments, costs, reasonable attorneys' fees, and other expenses of
                   every kind and nature, known and unknown, incurred or suffered by
                   Capcons, relating to or arising out of (a) your breach of these
                   Terms, (b) your use (or misuse) of our Service, or (c) your
                   violation of any law or the rights of a third party. We reserve the
                   right to handle our legal defense. However, we see fit, even if you
                   are indemnifying us, in which case you agree to cooperate with us so
                   we can execute our strategy.`}
                            </p>

                            <h2 className="text-lg md:text-xl font-semibold mb-4">Governing Law and Dispute Resolution</h2>
                            <ul className="list-decimal pl-6 space-y-2">
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`These Terms, and all disputes and claims arising out of or in
                       connection with these Terms or its subject matter or formation,
                       including non-contractual disputes and claims, are governed by the
                       laws of India without regard to its conflict of laws rules. These
                       laws will apply no matter where you live or are located in the
                       world. Notwithstanding the aforementioned, nothing in these Terms,
                       including the aforementioned choice of law provision, affects your
                       rights as a User to rely on any mandatory provisions of the
                       country's law in which you are resident.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {` You and Capcons: (a) waive the right to have any and all
                       disputes or claims arising from these Terms, your use or access to
                       the Services and the site or any other disputes with Capcons
                       (collectively, "Disputes") resolved in a court; and (b) waive any
                       right to a jury trial. Instead, you and Capcons agree to arbitrate
                       Disputes that are not resolved informally (as described below)
                       through binding arbitration (i.e. the referral of a Dispute to one
                       or more persons charged with reviewing the Dispute and making a
                       final and binding determination to resolve it) instead of having
                       the Dispute decided by a judge or jury in court).`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {` You and Capcons agree that any dispute will be resolved solely
                       through individual arbitration and will not be brought as a class
                       arbitration, class action or any other type of representative
                       proceeding. Neither party agrees to class arbitration or to an
                       arbitration in which an individual attempts to resolve a dispute
                       as a representative of another individual or group of individuals.
                       Further, you and Capcons agree that a dispute cannot be brought as
                       a class, or other types of representative action, whether within
                       or outside of arbitration, or on behalf of any other individual or
                       group of individuals.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`You agree that will notify Capcons, in writing, of any Dispute
                       within thirty (30) days of when it arises so that you and Capcons
                       can attempt, in good faith, to resolve the Dispute informally.
                       Notice to Capcons shall be provided by sending an email to
                       support@capcons.com. Your notice must include (1) your name,
                       postal address, and email address; (2) a description of the nature
                       or basis of the Dispute; and (3) the specific action that you are
                       seeking. If you and Capcons cannot resolve the Dispute within
                       thirty (30) days of Capcons receiving the notice, either you or
                       Capcons may, as appropriate pursuant to this section, commence an
                       arbitration proceeding. You and Capcons agree that any arbitration
                       or claim must be commenced or filed within one (1) year after the
                       Dispute arose; otherwise, you and Capcons agree that the claim is
                       permanently barred (which means that you will no longer have the
                       right to assert a claim regarding the Dispute).`}
                                </li>
                            </ul>

                            <h2 className="text-lg md:text-xl font-semibold mb-4">General</h2>
                            <ul className="list-decimal pl-6 space-y-2">
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`For members residing in the EU or European Economic Area or
                       elsewhere where our arbitration agreement is prohibited by law,
                       the laws of India will apply to any disputes arising out of or
                       relating to these Terms or the Service. Notwithstanding the
                       foregoing, the Disputes in Section 15 above shall be governed by
                       the laws of India. For the avoidance of doubt, the choice of India
                       governing law shall not supersede any mandatory consumer
                       protection legislation in such jurisdictions.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`Except for members residing in the EU or European Economic Area
                       who may bring claims in their country of residence in accordance
                       with applicable law and except for claims that may be properly
                       brought in a small claims court of competent jurisdiction, all
                       claims arising out of or relating these Terms, to the Service, or
                       to your relationship with Capcons that for whatever reason are not
                       submitted to arbitration will be litigated exclusively in the
                       federal or state courts of India. You and Capcons consent to the
                       exercise of personal jurisdiction of courts in India and waive any
                       claim that such courts constitute an inconvenient forum.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`If any provision of these Terms is held to be invalid or
                       unenforceable, such provision shall be struck, and the remaining
                       provisions shall be enforced. We may assign these Terms upon
                       notice to you at our sole discretion. Headings are for reference
                       purposes only and do not limit the scope or extent of such a
                       section. Our failure to act concerning a breach by you or others
                       does not waive our right to bear concerning subsequent or similar
                       breaches. We do not guarantee we will take action against all
                       breaches of these Terms.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`Capcons collects processes and/or shares personal data with third
                       parties in accordance with its Privacy Policy and all the
                       applicable laws and regulations regarding personal data processing
                       and protection.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    Capcons reserves the right to transfer or assign these Terms or
                                    any right or obligation under these Terms at any time.
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`We may amend any portion of these Terms at any time by posting the
                       revised version of these Terms with an updated revision date. The
                       changes will become effective and shall be deemed accepted by you,
                       the first time you use or access the Service after the initial
                       posting of the revised Terms and shall apply on a going-forward
                       basis with respect to your use of the Service including any
                       transactions initiated after the posting date. In the event that
                       you do not agree with any such modification, your sole and
                       exclusive remedy is to terminate your use of the Service.`}
                                </li>
                                <li className="text-sm md:text-base leading-relaxed">
                                    {`These Terms (and any additional terms, rules and conditions of
                       participation that may be posted on the Site) including the
                       Privacy Policy constitute the entire agreement with respect to the
                       Service and supersedes any prior agreements, oral or written.`}
                                </li>
                            </ul>
                        </section>
                    </article>
                </div>
                <div className="mt-8 md:mt-16 md:px-0 container">
                    <GetStarted />
                </div>
            </div>
            <RoundedBottom />
        </div>
    )
} 