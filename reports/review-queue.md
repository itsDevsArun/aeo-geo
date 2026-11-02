# Review queue

Copy rows into `outreach/review.csv` on the **main** branch to decide. Columns: `domain,decision,i_checked_it_is_permitted,adapter,business_name,business_name_verified,notes`.

- `decision`: approve / reject / suppress / pending. **approve** needs `i_checked_it_is_permitted=yes` (official site, general business-enquiry form, no 'no solicitation' notice).
- `adapter`: approve once the form mapping looks right. Live runs only use adapters that are approved **and** passed a dry run.

## jdprecisionplumbing.com

| | |
|---|---|
| Website | https://www.jdprecisionplumbing.com/ |
| Search title | JD Precision Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.jdprecisionplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-802b5b7c_inspection_2026-11-02T02-43-45-892Z.jpg)

Suggested CSV line: `jdprecisionplumbing.com,approve,yes,,,,`

## heritage-heat-plumb.com

| | |
|---|---|
| Website | http://heritage-heat-plumb.com/ |
| Search title | Heritage Heating & Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `heritage-heat-plumb.com,approve,yes,,,,`

## auroraplumbing.com

| | |
|---|---|
| Website | https://www.auroraplumbing.com/ |
| Search title | Aurora Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.auroraplumbing.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-fb28778c_inspection_2026-11-02T02-44-54-924Z.jpg)

Suggested CSV line: `auroraplumbing.com,approve,yes,,,,`

## exspurtplumbingomaha.com

| | |
|---|---|
| Website | http://exspurtplumbingomaha.com/ |
| Search title | Exspurt Plumbing, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | http://exspurtplumbingomaha.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "lastname": set sender lastName in campaign.json to allow this form
Review: Required address field "address": set sender address in campaign.json to allow this form
Review: Required zip field "zip": set sender zip in campaign.json to allow this form
Review: Required field "reason" is not a standard field
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-d1406bb9_inspection_2026-11-02T02-51-14-387Z.jpg)

Suggested CSV line: `exspurtplumbingomaha.com,approve,yes,,,,`

## plumbingbyspellmanks.com

| | |
|---|---|
| Website | https://www.plumbingbyspellmanks.com/ |
| Search title | Plumbing by Spellman, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://plumbingbyspellmanks.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-a7df9914_inspection_2026-11-02T02-45-14-224Z.jpg)

Suggested CSV line: `plumbingbyspellmanks.com,approve,yes,,,,`

## yell4george.com

| | |
|---|---|
| Website | https://yell4george.com/ |
| Search title | George Plumbing Co. |
| Found by query | osm:craft=plumber |
| Contact page | https://yell4george.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-0add513c_inspection_2026-11-02T02-45-34-587Z.jpg)

Suggested CSV line: `yell4george.com,approve,yes,,,,`

## myplumberca.com

| | |
|---|---|
| Website | https://www.myplumberca.com/ |
| Search title | My Plumber CA |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH at https://myplumberca.com/
~~~

Suggested CSV line: `myplumberca.com,approve,yes,,,,`

## supremeservicetoday.com

| | |
|---|---|
| Website | https://www.supremeservicetoday.com/ |
| Search title | Supreme Service Today |
| Found by query | osm:craft=plumber |
| Contact page | https://supremeservicetoday.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-77c4d310_inspection_2026-11-02T02-45-55-635Z.jpg)

Suggested CSV line: `supremeservicetoday.com,approve,yes,,,,`

## allveesplumbing.com

| | |
|---|---|
| Website | https://allveesplumbing.com/ |
| Search title | All Vee’s Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | https://allveesplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-cb0b4515_inspection_2026-11-02T02-46-04-807Z.jpg)

Suggested CSV line: `allveesplumbing.com,approve,yes,,,,`

## greenvalleyplumbingaz.com

| | |
|---|---|
| Website | https://www.greenvalleyplumbingaz.com/ |
| Search title | Green Valley Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.greenvalleyplumbingaz.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-8bfec905_inspection_2026-11-02T02-46-20-634Z.jpg)

Suggested CSV line: `greenvalleyplumbingaz.com,approve,yes,,,,`

## vanspe.com

| | |
|---|---|
| Website | https://www.vanspe.com/ |
| Search title | Van's Plumbing & Electric |
| Found by query | osm:craft=plumber |
| Contact page | https://www.vanspe.com/contact-us/plan-upload/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form requires a file upload
Review: Required address field "address-01": set sender address in campaign.json to allow this form
Review: Required field "date-672" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-9c733a5f_inspection_2026-11-02T02-46-28-479Z.jpg)

Suggested CSV line: `vanspe.com,approve,yes,,,,`

## kineticosa.com

| | |
|---|---|
| Website | https://kineticosa.com/ |
| Search title | Kinetico of San Antonio |
| Found by query | osm:craft=plumber |
| Contact page | https://kineticosa.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is booking
Review: Required last name field "Last Name(Required)": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Preferred Time To Call(Required)" has no truthful option
Review: Required field "Preferred Appointment(Required)" is not a standard field
Form purpose: booking
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-8e172d2e_inspection_2026-11-02T02-45-26-164Z.jpg)

Suggested CSV line: `kineticosa.com,approve,yes,,,,`

## hincheybrothers.net

| | |
|---|---|
| Website | https://www.hincheybrothers.net/ |
| Search title | Hinchey Brothers Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.hincheybrothers.net/index.html |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-725fc5a3_inspection_2026-11-02T02-46-46-427Z.jpg)

Suggested CSV line: `hincheybrothers.net,approve,yes,,,,`

## acepelizon.com

| | |
|---|---|
| Website | https://www.acepelizon.com/ |
| Search title | Ace Pelizon Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://acepelizon.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-6839c797_inspection_2026-11-02T02-46-57-889Z.jpg)

Suggested CSV line: `acepelizon.com,approve,yes,,,,`

## paylessplumbing.org

| | |
|---|---|
| Website | https://www.paylessplumbing.org/ |
| Search title | Payless Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://forsale.godaddy.com/forsale/www.paylessplumbing.org?utm\_source=TDFS\_BINNS2&utm\_medium=parkedpages&utm\_campaign=x\_corp\_tdfs-binns2\_base&traffic\_type=TDFS\_BINNS2&traffic\_id=binns2& |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-ed22b9f7_inspection_2026-11-02T02-47-04-802Z.jpg)

Suggested CSV line: `paylessplumbing.org,approve,yes,,,,`

## donsplumbingandheating.com

| | |
|---|---|
| Website | https://donsplumbingandheating.com/ |
| Search title | Don's Plumbing And Heating LLC |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `donsplumbingandheating.com,approve,yes,,,,`

## h2opumpandwellservice.com

| | |
|---|---|
| Website | http://h2opumpandwellservice.com/ |
| Search title | H2O Pump & Well Service, LLC. |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `h2opumpandwellservice.com,approve,yes,,,,`

## meticulousplumbing.com

| | |
|---|---|
| Website | https://meticulousplumbing.com/ |
| Search title | Meticulous Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://meticulousplumbing.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required dropdown "Service*" has no truthful option
Review: Required zip field "Service Zip Code*": set sender zip in campaign.json to allow this form
Review: Required dropdown "Preferred Service Day*" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-2e21e0c1_inspection_2026-11-02T02-44-24-556Z.jpg)

Suggested CSV line: `meticulousplumbing.com,approve,yes,,,,`

## theadmiralplumber.com

| | |
|---|---|
| Website | https://www.theadmiralplumber.com/ |
| Search title | Admiral Plumbing Services, LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://www.serviceexperts.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: Required address field "Address*": set sender address in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-a3e7d943_inspection_2026-11-02T02-48-08-723Z.jpg)

Suggested CSV line: `theadmiralplumber.com,approve,yes,,,,`

## myrooterman.com

| | |
|---|---|
| Website | https://www.myrooterman.com/ |
| Search title | Rooter Man |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `myrooterman.com,approve,yes,,,,`

## thesunnyplumber.com

| | |
|---|---|
| Website | http://www.thesunnyplumber.com/ |
| Search title | The Sunny Plumber |
| Found by query | osm:craft=plumber |
| Contact page | https://www.goettl.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-86678c0e_inspection_2026-11-02T02-48-17-037Z.jpg)

Suggested CSV line: `thesunnyplumber.com,approve,yes,,,,`

## mydraincompany.com

| | |
|---|---|
| Website | https://www.mydraincompany.com/ |
| Search title | My Drain Company Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.mydraincompany.com/contact/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is newsletter
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-577896f3_inspection_2026-11-02T02-48-25-216Z.jpg)

Suggested CSV line: `mydraincompany.com,approve,yes,,,,`

## richsplumbing.com

| | |
|---|---|
| Website | https://www.richsplumbing.com/ |
| Search title | Rich's Plumbing, Heating & Air Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.richsplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
BLOCKED: Form purpose is emergency
Review: No message field detected
Review: No submit button detected
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-16c6b842_inspection_2026-11-02T02-48-33-996Z.jpg)

Suggested CSV line: `richsplumbing.com,approve,yes,,,,`

## airproductsinc.com

| | |
|---|---|
| Website | https://www.airproductsinc.com/ |
| Search title | Air Products & Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.airproductsinc.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-cd11889f_inspection_2026-11-02T02-48-43-910Z.jpg)

Suggested CSV line: `airproductsinc.com,approve,yes,,,,`

## neyerplumbing.com

| | |
|---|---|
| Website | https://www.neyerplumbing.com/ |
| Search title | Ken Neyer Plumbing, Inc |
| Found by query | osm:craft=plumber |
| Contact page | https://www.neyerplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-026089c5_inspection_2026-11-02T02-48-53-109Z.jpg)

Suggested CSV line: `neyerplumbing.com,approve,yes,,,,`

## apollodrain.com

| | |
|---|---|
| Website | https://apollodrain.com/ |
| Search title | Apollo Drain & Rooter Service, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://apolloservices.com/plumbing/drain/?utm\_source=redirect&utm\_medium=domain&utm\_campaign=apollodrain.com |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-33082fe9_inspection_2026-11-02T02-48-59-250Z.jpg)

Suggested CSV line: `apollodrain.com,approve,yes,,,,`

## donnicholsplumbing.com

| | |
|---|---|
| Website | https://donnicholsplumbing.com/ |
| Search title | Don Nichols Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://donnicholsplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-a4b5fb28_inspection_2026-11-02T02-49-13-425Z.jpg)

Suggested CSV line: `donnicholsplumbing.com,approve,yes,,,,`

## plumbinginnaplesflorida.com

| | |
|---|---|
| Website | http://www.plumbinginnaplesflorida.com/ |
| Search title | Professional Plumbing Systems |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `plumbinginnaplesflorida.com,approve,yes,,,,`

## dandlplumbing.com

| | |
|---|---|
| Website | https://www.dandlplumbing.com/ |
| Search title | D&L Plumbing and Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://dandlplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-627d4a4b_inspection_2026-11-02T02-43-59-523Z.jpg)

Suggested CSV line: `dandlplumbing.com,approve,yes,,,,`

## johnsonpumpservice.com

| | |
|---|---|
| Website | https://www.johnsonpumpservice.com/ |
| Search title | Johnson Pump |
| Found by query | osm:craft=plumber |
| Contact page | https://www.johnsonpumpservice.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-9184000d_inspection_2026-11-02T02-43-39-448Z.jpg)

Suggested CSV line: `johnsonpumpservice.com,approve,yes,,,,`

## mattcoplumbing.com

| | |
|---|---|
| Website | https://mattcoplumbing.com/ |
| Search title | Mattco Plumbing & Heating, LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://enter.net/request-a-demo |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-175a3a34_inspection_2026-11-02T02-49-27-210Z.jpg)

Suggested CSV line: `mattcoplumbing.com,approve,yes,,,,`

## bzdependable.com

| | |
|---|---|
| Website | https://www.bzdependable.com/ |
| Search title | BZ Dependable Plumbing & Heating Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.totalcomfort.biz/?\_\_cf\_chl\_rt\_tk=0KeWgM\_fT3PGmmIoWhS93LhlYEuUxPzr\_Z7KWUfjdJA-1793587774-1.0.1.1-khmPqkFVwUfesyzkUx0Jye1w0N8.K7g.clLIaiWjYls |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-a111144c_inspection_2026-11-02T02-49-34-910Z.jpg)

Suggested CSV line: `bzdependable.com,approve,yes,,,,`

## spsnaples.com

| | |
|---|---|
| Website | https://spsnaples.com/ |
| Search title | Summers Plumbing Service |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.spsnaples.com/
~~~

Suggested CSV line: `spsnaples.com,approve,yes,,,,`

## lgrazioseplumbing.com

| | |
|---|---|
| Website | https://lgrazioseplumbing.com/ |
| Search title | L. Graziose |
| Found by query | osm:craft=plumber |
| Contact page | https://www.lgrazioseplumbing.com/?\_\_cf\_chl\_rt\_tk=nVcE.tpUUe.01Wi7f5eTkzP9LDrNnvzdwbuxX49CqzU-1793587794-1.0.1.1-X.fKukHG4ctXmskUTpaG48kRflmggrUFsny9bVvnopo |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-cc0e02d6_inspection_2026-11-02T02-49-54-144Z.jpg)

Suggested CSV line: `lgrazioseplumbing.com,approve,yes,,,,`

## plumberscarpinteria.com

| | |
|---|---|
| Website | https://plumberscarpinteria.com/ |
| Search title | One Call Plumber Carpinteria |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `plumberscarpinteria.com,approve,yes,,,,`

## plumbersgoleta.com

| | |
|---|---|
| Website | https://plumbersgoleta.com/ |
| Search title | One Call Plumber Goleta |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `plumbersgoleta.com,approve,yes,,,,`

## rootersontime.com

| | |
|---|---|
| Website | https://rootersontime.com/ |
| Search title | Rooters On Time |
| Found by query | osm:craft=plumber |
| Contact page | https://www.hugedomains.com/domain\_profile.cfm?d=rootersontime.com |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-36c0590b_inspection_2026-11-02T02-51-32-031Z.jpg)

Suggested CSV line: `rootersontime.com,approve,yes,,,,`

## modernpi.com

| | |
|---|---|
| Website | https://www.modernpi.com/ |
| Search title | Modern Plumbing Industries, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.modernpi.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-08419ee6_inspection_2026-11-02T02-47-51-390Z.jpg)

Suggested CSV line: `modernpi.com,approve,yes,,,,`

## plumbersinsantabarbara.com

| | |
|---|---|
| Website | https://plumbersinsantabarbara.com/ |
| Search title | One Call Plumber Santa Barbara |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `plumbersinsantabarbara.com,approve,yes,,,,`

## nebaronline.com

| | |
|---|---|
| Website | https://www.nebaronline.com/ |
| Search title | Craftsman Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.nebaronline.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-719d9de3_inspection_2026-11-02T02-44-09-129Z.jpg)

Suggested CSV line: `nebaronline.com,approve,yes,,,,`

## pelletierms.com

| | |
|---|---|
| Website | https://www.pelletierms.com/ |
| Search title | Pelletier Mechanical Services, LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://callperfecttiming.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required field "SERVICE NEEDED(REQUIRED)" is not a standard field
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-a62674af_inspection_2026-11-02T02-47-17-463Z.jpg)

Suggested CSV line: `pelletierms.com,approve,yes,,,,`

## roto-rooter-syracuse.com

| | |
|---|---|
| Website | http://roto-rooter-syracuse.com/ |
| Search title | Bauer Plumbing - Roto-Rooter |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `roto-rooter-syracuse.com,approve,yes,,,,`

## captainplumbingservices.com

| | |
|---|---|
| Website | http://www.captainplumbingservices.com/ |
| Search title | Captain Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `captainplumbingservices.com,approve,yes,,,,`

## utahsplumber.com

| | |
|---|---|
| Website | https://www.utahsplumber.com/ |
| Search title | Connectionz Plumbing Heating & Air |
| Found by query | osm:craft=plumber |
| Contact page | https://utahsplumber.com/contact-connectionz/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "LAST NAME": set sender lastName in campaign.json to allow this form
Review: Required dropdown "SERVICE NEEDED" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-4f472d32_inspection_2026-11-02T02-56-26-237Z.jpg)

Suggested CSV line: `utahsplumber.com,approve,yes,,,,`

## magplumbing.com

| | |
|---|---|
| Website | https://magplumbing.com/ |
| Search title | MAG Plumbing & Remodeling |
| Found by query | osm:craft=plumber |
| Contact page | https://magplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-a9b4260b_inspection_2026-11-02T02-51-51-754Z.jpg)

Suggested CSV line: `magplumbing.com,approve,yes,,,,`

## newmansplumbing.net

| | |
|---|---|
| Website | http://newmansplumbing.net/ |
| Search title | Newman's Plumbing Service & Repair, LLC |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `newmansplumbing.net,approve,yes,,,,`

## lwmorseandson.com

| | |
|---|---|
| Website | https://www.lwmorseandson.com/ |
| Search title | L W Morse & Son |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `lwmorseandson.com,approve,yes,,,,`

## ricksplumbing.co

| | |
|---|---|
| Website | https://ricksplumbing.co/ |
| Search title | Rick's Plumbing Service |
| Found by query | osm:craft=plumber |
| Contact page | https://ricksplumbing.co/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-7ef3711d_inspection_2026-11-02T02-52-46-787Z.jpg)

Suggested CSV line: `ricksplumbing.co,approve,yes,,,,`

## bannerwater.com

| | |
|---|---|
| Website | https://bannerwater.com/ |
| Search title | Banner Water |
| Found by query | osm:craft=plumber |
| Contact page | https://bannerwater.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-767c6706_inspection_2026-11-02T02-52-58-721Z.jpg)

Suggested CSV line: `bannerwater.com,approve,yes,,,,`

## 5star-supply.com

| | |
|---|---|
| Website | https://www.5star-supply.com/ |
| Search title | Five Star Service & Supply Company |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `5star-supply.com,approve,yes,,,,`

## onewayrooter.com

| | |
|---|---|
| Website | https://www.onewayrooter.com/ |
| Search title | One Way Rooter & Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.onewayrooter.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-fe7c5d34_inspection_2026-11-02T02-54-53-964Z.jpg)

Suggested CSV line: `onewayrooter.com,approve,yes,,,,`

## generalplumbingsupply.net

| | |
|---|---|
| Website | https://generalplumbingsupply.net/ |
| Search title | General Plumbing Supply |
| Found by query | osm:craft=plumber |
| Contact page | https://generalplumbingsupply.net/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-8bd728a0_inspection_2026-11-02T02-55-42-865Z.jpg)

Suggested CSV line: `generalplumbingsupply.net,approve,yes,,,,`

## stcharlesplumbingco.com

| | |
|---|---|
| Website | http://stcharlesplumbingco.com/ |
| Search title | St Charles Plumbing Company |
| Found by query | osm:craft=plumber |
| Contact page | http://stcharlesplumbingco.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-f61fed62_inspection_2026-11-02T02-56-35-632Z.jpg)

Suggested CSV line: `stcharlesplumbingco.com,approve,yes,,,,`

## flowrightphi.com

| | |
|---|---|
| Website | https://flowrightphi.com/ |
| Search title | Flow Right Plumbing, Heating and Irrigation, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://flowrightphi.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is emergency
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required dropdown "I Need Help Regarding" has no truthful option
Review: Required dropdown "The Priority Level for this Request is" has no truthful option
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-457a1083_inspection_2026-11-02T02-57-02-847Z.jpg)

Suggested CSV line: `flowrightphi.com,approve,yes,,,,`

## rightwayplumb.com

| | |
|---|---|
| Website | https://rightwayplumb.com/ |
| Search title | Right Way Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://rightwayplumb.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-682e2700_inspection_2026-11-02T02-58-00-245Z.jpg)

Suggested CSV line: `rightwayplumb.com,approve,yes,,,,`

## jerzdrainz.com

| | |
|---|---|
| Website | https://jerzdrainz.com/ |
| Search title | Jer-Z Drainz Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.jerseydrains.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-f66f8965_inspection_2026-11-02T02-58-11-478Z.jpg)

Suggested CSV line: `jerzdrainz.com,approve,yes,,,,`

## restorationplumbing.net

| | |
|---|---|
| Website | http://restorationplumbing.net/ |
| Search title | Plumbing Sewer and Restoration Inc |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `restorationplumbing.net,approve,yes,,,,`

## oliversplumbinginc.com

| | |
|---|---|
| Website | https://www.oliversplumbinginc.com/ |
| Search title | Oliver's Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.oliversplumbinginc.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-1b7c76c4_inspection_2026-11-02T02-59-53-320Z.jpg)

Suggested CSV line: `oliversplumbinginc.com,approve,yes,,,,`

## winsupplyofconway.com

| | |
|---|---|
| Website | http://www.winsupplyofconway.com/ |
| Search title | Winsupply Of Conway |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: Timeout 30000ms exceeded.
~~~

Suggested CSV line: `winsupplyofconway.com,approve,yes,,,,`

## beaconplumbing.net

| | |
|---|---|
| Website | https://www.beaconplumbing.net/ |
| Search title | Beacon Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.beaconplumbing.net/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-c54edf71_inspection_2026-11-02T02-54-33-327Z.jpg)

Suggested CSV line: `beaconplumbing.net,approve,yes,,,,`

## louiesrestorationplumbing.com

| | |
|---|---|
| Website | https://www.louiesrestorationplumbing.com/ |
| Search title | Louies Water Damage & Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `louiesrestorationplumbing.com,approve,yes,,,,`

## rushrooter.com

| | |
|---|---|
| Website | http://www.rushrooter.com/ |
| Search title | Rush Rooter LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://rushrooter.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-baeb4733_inspection_2026-11-02T02-55-22-011Z.jpg)

Suggested CSV line: `rushrooter.com,approve,yes,,,,`

## drainmechanics.com

| | |
|---|---|
| Website | https://www.drainmechanics.com/ |
| Search title | Drain Mechanics |
| Found by query | osm:craft=plumber |
| Contact page | https://www.drainmechanics.com/about-us/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Address *": set sender address in campaign.json to allow this form
Review: Required dropdown "State *" has no truthful option
Review: Required zip field "Zip *": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-f10ebc32_inspection_2026-11-02T02-55-52-771Z.jpg)

Suggested CSV line: `drainmechanics.com,approve,yes,,,,`

## renkenplumbingheating.com

| | |
|---|---|
| Website | https://www.renkenplumbingheating.com/ |
| Search title | Renken Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://www.renkenplumbingheating.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-0501d041_inspection_2026-11-02T02-56-44-443Z.jpg)

Suggested CSV line: `renkenplumbingheating.com,approve,yes,,,,`

## gehringermechanical.com

| | |
|---|---|
| Website | https://gehringermechanical.com/ |
| Search title | Gehringer Mechanical |
| Found by query | osm:craft=plumber |
| Contact page | https://www.gehringermechanical.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-cdbf14bb_inspection_2026-11-02T02-56-53-315Z.jpg)

Suggested CSV line: `gehringermechanical.com,approve,yes,,,,`

## h2flowplumbing.com

| | |
|---|---|
| Website | https://h2flowplumbing.com/ |
| Search title | H2Flow Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://h2flowplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-07bcd708_inspection_2026-11-02T02-57-28-673Z.jpg)

Suggested CSV line: `h2flowplumbing.com,approve,yes,,,,`

## hustedplumbing.com

| | |
|---|---|
| Website | https://www.hustedplumbing.com/ |
| Search title | Husted Plumbers Ojai CA |
| Found by query | osm:craft=plumber |
| Contact page | https://lamortsubite.co.uk/https:/lamortsubite.co.uk/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-061c0530_inspection_2026-11-02T02-57-39-258Z.jpg)

Suggested CSV line: `hustedplumbing.com,approve,yes,,,,`

## executivepd.com

| | |
|---|---|
| Website | https://executivepd.com/ |
| Search title | Executive Plumbing & Drain, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://executivepd.com/contact-us-2/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required dropdown "Services" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-9e2d1fbc_inspection_2026-11-02T02-58-20-393Z.jpg)

Suggested CSV line: `executivepd.com,approve,yes,,,,`

## jndplumbinganddrains.com

| | |
|---|---|
| Website | https://jndplumbinganddrains.com/ |
| Search title | JND Plumbing and Drains |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.jndplumbinganddrains.com/
~~~

Suggested CSV line: `jndplumbinganddrains.com,approve,yes,,,,`

## acandplumbing.com

| | |
|---|---|
| Website | https://acandplumbing.com/ |
| Search title | McNamara Custom Services Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://acandplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-b606a4cd_inspection_2026-11-02T02-58-40-977Z.jpg)

Suggested CSV line: `acandplumbing.com,approve,yes,,,,`

## azplumbers.com

| | |
|---|---|
| Website | https://azplumbers.com/ |
| Search title | One Call Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | https://azplumbers.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-240e211e_inspection_2026-11-02T02-59-02-709Z.jpg)

Suggested CSV line: `azplumbers.com,approve,yes,,,,`

## plumbingportcharlottefl.com

| | |
|---|---|
| Website | https://plumbingportcharlottefl.com/ |
| Search title | Protek Plumbing and Drain Specialists |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `plumbingportcharlottefl.com,approve,yes,,,,`

## paluskaplumbing.com

| | |
|---|---|
| Website | https://www.paluskaplumbing.com/ |
| Search title | Paluska Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.paluskaplumbing.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-518f9b33_inspection_2026-11-02T03-00-16-541Z.jpg)

Suggested CSV line: `paluskaplumbing.com,approve,yes,,,,`

## jedihandyman.com

| | |
|---|---|
| Website | https://jedihandyman.com/ |
| Search title | Jedi Services |
| Found by query | osm:craft=plumber |
| Contact page | https://jedihandyman.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-8b2819dd_inspection_2026-11-02T02-51-41-762Z.jpg)

Suggested CSV line: `jedihandyman.com,approve,yes,,,,`

## performanceplumbingca.com

| | |
|---|---|
| Website | http://performanceplumbingca.com/ |
| Search title | Performance Plumbing & Rooter |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `performanceplumbingca.com,approve,yes,,,,`

## crownplumbingsanjose.com

| | |
|---|---|
| Website | https://www.crownplumbingsanjose.com/ |
| Search title | Crown Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://crownplumbingsanjose.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "form_fields[field_e6bf47f]": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-c24825c8_inspection_2026-11-02T02-52-25-456Z.jpg)

Suggested CSV line: `crownplumbingsanjose.com,approve,yes,,,,`

## everydayplumber.com

| | |
|---|---|
| Website | http://www.everydayplumber.com/ |
| Search title | EVERYDAYPLUMBER.com |
| Found by query | osm:craft=plumber |
| Contact page | https://everydayplumber.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "FIRST AND LAST NAME *": set sender lastName in campaign.json to allow this form
Review: Required zip field "ZIP CODE *": set sender zip in campaign.json to allow this form
Review: Required field "YOUR PLUMBING REQUEST *" is not a standard field
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-88f07468_inspection_2026-11-02T02-53-24-318Z.jpg)

Suggested CSV line: `everydayplumber.com,approve,yes,,,,`

## certifiedplumbingmi.com

| | |
|---|---|
| Website | https://certifiedplumbingmi.com/ |
| Search title | Certified Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://certifiedplumbingmi.com/schedule-appointment-plumber-macomb-oakland-county/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-bc0bb338_inspection_2026-11-02T03-00-07-606Z.jpg)

Suggested CSV line: `certifiedplumbingmi.com,approve,yes,,,,`

## proactiveplumbingincsd.com

| | |
|---|---|
| Website | http://proactiveplumbingincsd.com/ |
| Search title | Proactive Plumbing, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://proactiveplumbinginc.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is newsletter
Review: Required field "Would you like a monthly newsletter?*" is not a standard field
Review: Required field "Would you like to get notified about product or service updates?*" is not a standard field
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-ff6b4fc6_inspection_2026-11-02T02-57-53-835Z.jpg)

Suggested CSV line: `proactiveplumbingincsd.com,approve,yes,,,,`

## orderaplumber.com

| | |
|---|---|
| Website | https://orderaplumber.com/ |
| Search title | Order A Plumber |
| Found by query | osm:craft=plumber |
| Contact page | https://orderaplumber.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: Required dropdown "Are you a new customer?" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-bb1bf96d_inspection_2026-11-02T02-57-17-090Z.jpg)

Suggested CSV line: `orderaplumber.com,approve,yes,,,,`

## fischerplumbing.com

| | |
|---|---|
| Website | https://fischerplumbing.com/ |
| Search title | Fischer Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://fischerplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "text-842": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-cac5231a_inspection_2026-11-02T02-56-13-249Z.jpg)

Suggested CSV line: `fischerplumbing.com,approve,yes,,,,`

## plumbing-heating-air-experts.com

| | |
|---|---|
| Website | https://www.plumbing-heating-air-experts.com/ |
| Search title | Ace Contractors Plumbing, Heating, And Air |
| Found by query | osm:craft=plumber |
| Contact page | https://www.plumbing-heating-air-experts.com/lander |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-5af6edce_inspection_2026-11-02T03-04-22-944Z.jpg)

Suggested CSV line: `plumbing-heating-air-experts.com,approve,yes,,,,`

## crouchleyplumbing.com

| | |
|---|---|
| Website | https://crouchleyplumbing.com/ |
| Search title | Crouchley Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://crouchleyplumbing.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-06da8c21_inspection_2026-11-02T03-04-50-120Z.jpg)

Suggested CSV line: `crouchleyplumbing.com,approve,yes,,,,`

## bradysplumbing.com

| | |
|---|---|
| Website | https://bradysplumbing.com/ |
| Search title | Brady's Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://bradysplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-e88174a0_inspection_2026-11-02T03-05-17-664Z.jpg)

Suggested CSV line: `bradysplumbing.com,approve,yes,,,,`

## hankklinkplumbing.com

| | |
|---|---|
| Website | http://hankklinkplumbing.com/ |
| Search title | Hank Klink Plumbing LLC |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `hankklinkplumbing.com,approve,yes,,,,`

## econosewer.com

| | |
|---|---|
| Website | https://econosewer.com/ |
| Search title | Econo Sewer & Drain Service Inc |
| Found by query | osm:craft=plumber |
| Contact page | https://econosewer.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-22bb3ad6_inspection_2026-11-02T03-06-02-641Z.jpg)

Suggested CSV line: `econosewer.com,approve,yes,,,,`

## masterrooter.com

| | |
|---|---|
| Website | https://masterrooter.com/ |
| Search title | Master Rooter Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://masterrooter.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is search
Review: Required zip field "Zip Code *": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: search
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-f98b26a9_inspection_2026-11-02T03-06-33-812Z.jpg)

Suggested CSV line: `masterrooter.com,approve,yes,,,,`

## philpotplumbingelectric.com

| | |
|---|---|
| Website | http://philpotplumbingelectric.com/ |
| Search title | Jessie Philpot Plumbing & Electric, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | http://philpotplumbingelectric.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-0a3dc75a_inspection_2026-11-02T03-07-02-083Z.jpg)

Suggested CSV line: `philpotplumbingelectric.com,approve,yes,,,,`

## stegplumbing.com

| | |
|---|---|
| Website | https://www.stegplumbing.com/ |
| Search title | Steg Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.stegplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-efa952dd_inspection_2026-11-02T03-01-38-057Z.jpg)

Suggested CSV line: `stegplumbing.com,approve,yes,,,,`

## bohallplumbing.com

| | |
|---|---|
| Website | https://bohallplumbing.com/ |
| Search title | Bohall Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://bohallplumbing.com/v1/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-4525bfdb_inspection_2026-11-02T03-01-01-826Z.jpg)

Suggested CSV line: `bohallplumbing.com,approve,yes,,,,`

## sizemoreplumbing.net

| | |
|---|---|
| Website | https://www.sizemoreplumbing.net/ |
| Search title | Sizemore Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://sizemoreplumbing.net/contactus.html |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-130ed56e_inspection_2026-11-02T03-01-11-433Z.jpg)

Suggested CSV line: `sizemoreplumbing.net,approve,yes,,,,`

## flatgardplumbinginc.com

| | |
|---|---|
| Website | https://www.flatgardplumbinginc.com/ |
| Search title | Flatgard Plumbing Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.flatgardplumbinginc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-3673dfc2_inspection_2026-11-02T03-01-23-816Z.jpg)

Suggested CSV line: `flatgardplumbinginc.com,approve,yes,,,,`

## mystgeorgeplumber.com

| | |
|---|---|
| Website | https://www.mystgeorgeplumber.com/ |
| Search title | Walker Plumbing, Heating & Air |
| Found by query | osm:craft=plumber |
| Contact page | https://www.mystgeorgeplumber.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-573b456d_inspection_2026-11-02T03-01-51-083Z.jpg)

Suggested CSV line: `mystgeorgeplumber.com,approve,yes,,,,`

## couvillionplumbingllc.com

| | |
|---|---|
| Website | https://www.couvillionplumbingllc.com/ |
| Search title | Couvillion Plumbing LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://www.couvillionplumbingllc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-6344dc10_inspection_2026-11-02T03-00-54-602Z.jpg)

Suggested CSV line: `couvillionplumbingllc.com,approve,yes,,,,`

## donshandymanserviceco.com

| | |
|---|---|
| Website | http://donshandymanserviceco.com/ |
| Search title | Don's Handyman Service |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `donshandymanserviceco.com,approve,yes,,,,`

## dandsplumbingtexas.com

| | |
|---|---|
| Website | http://dandsplumbingtexas.com/ |
| Search title | D & S Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `dandsplumbingtexas.com,approve,yes,,,,`

## robisonplumbing.com

| | |
|---|---|
| Website | https://robisonplumbing.com/ |
| Search title | Robison Plumbing Service Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://robisonplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-f9109c5f_inspection_2026-11-02T03-03-04-178Z.jpg)

Suggested CSV line: `robisonplumbing.com,approve,yes,,,,`

## greatmountainsplumbing.com

| | |
|---|---|
| Website | https://www.greatmountainsplumbing.com/ |
| Search title | Great Mountains Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `greatmountainsplumbing.com,approve,yes,,,,`

## aaarooter.net

| | |
|---|---|
| Website | https://www.aaarooter.net/ |
| Search title | AAA Rooter |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `aaarooter.net,approve,yes,,,,`

## arandaplumbingonline.com

| | |
|---|---|
| Website | https://www.arandaplumbingonline.com/ |
| Search title | Aranda's Plumbing, Heating & Supply |
| Found by query | osm:craft=plumber |
| Contact page | https://www.arandaplumbingonline.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-83d94649_inspection_2026-11-02T03-05-08-771Z.jpg)

Suggested CSV line: `arandaplumbingonline.com,approve,yes,,,,`

## walkerplumbingpa.com

| | |
|---|---|
| Website | https://www.walkerplumbingpa.com/ |
| Search title | Walker Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.walkerplumbingpa.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-61da6bd8_inspection_2026-11-02T03-05-27-179Z.jpg)

Suggested CSV line: `walkerplumbingpa.com,approve,yes,,,,`

## johnmccaslinplumbing.com

| | |
|---|---|
| Website | http://johnmccaslinplumbing.com/ |
| Search title | John McCaslin Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `johnmccaslinplumbing.com,approve,yes,,,,`

## fasslerplumbing.com

| | |
|---|---|
| Website | https://www.fasslerplumbing.com/ |
| Search title | Fassler Plumbing, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.fasslerplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-802f37c6_inspection_2026-11-02T03-06-08-793Z.jpg)

Suggested CSV line: `fasslerplumbing.com,approve,yes,,,,`

## jfkplumbingnj.com

| | |
|---|---|
| Website | https://jfkplumbingnj.com/ |
| Search title | JFK Plumbing & Heating Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.jfkplumbingnj.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-ce5f66e6_inspection_2026-11-02T03-06-23-530Z.jpg)

Suggested CSV line: `jfkplumbingnj.com,approve,yes,,,,`

## pipesrusplumbing.com

| | |
|---|---|
| Website | https://www.pipesrusplumbing.com/ |
| Search title | PIPES-R-US Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://pipesrusplumbing.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-8e0c6dae_inspection_2026-11-02T03-06-53-272Z.jpg)

Suggested CSV line: `pipesrusplumbing.com,approve,yes,,,,`

## calldowntownplumbing.com

| | |
|---|---|
| Website | http://www.calldowntownplumbing.com/ |
| Search title | Downtown Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | http://www.calldowntownplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-ed59f58d_inspection_2026-11-02T03-00-47-937Z.jpg)

Suggested CSV line: `calldowntownplumbing.com,approve,yes,,,,`

## dignityplumbing.com

| | |
|---|---|
| Website | https://dignityplumbing.com/ |
| Search title | Dignity Plumbing Las Vegas |
| Found by query | osm:craft=plumber |
| Contact page | https://www.dignityplumbing.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
BLOCKED: Form purpose is job application
Review: Required last name field "Last-Name": set sender lastName in campaign.json to allow this form
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: Required field "Promo-Code" is not a standard field
Review: Required dropdown "Are-You-A-New-Customer" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-5fc211e9_inspection_2026-11-02T03-03-31-342Z.jpg)

Suggested CSV line: `dignityplumbing.com,approve,yes,,,,`

## patsplumbinghvac.net

| | |
|---|---|
| Website | https://www.patsplumbinghvac.net/ |
| Search title | Pat's Plumbing Heating & Cooling |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://patsplumbinghvac.net/
~~~

Suggested CSV line: `patsplumbinghvac.net,approve,yes,,,,`

## rjcarrollplumbing.com

| | |
|---|---|
| Website | https://www.rjcarrollplumbing.com/ |
| Search title | R.J Carroll and Sons |
| Found by query | osm:craft=plumber |
| Contact page | https://www.rjcarrollplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-589b4263_inspection_2026-11-02T03-03-59-750Z.jpg)

Suggested CSV line: `rjcarrollplumbing.com,approve,yes,,,,`

## bayandvalleybackflow.com

| | |
|---|---|
| Website | https://www.bayandvalleybackflow.com/ |
| Search title | Bay and Valley Backflow Services |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `bayandvalleybackflow.com,approve,yes,,,,`

## mdnenterprises.com

| | |
|---|---|
| Website | https://mdnenterprises.com/ |
| Search title | MDN Enterprises |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `mdnenterprises.com,approve,yes,,,,`

## mdplumbingin.com

| | |
|---|---|
| Website | https://www.mdplumbingin.com/ |
| Search title | M D Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `mdplumbingin.com,approve,yes,,,,`

## onpointplumbing.org

| | |
|---|---|
| Website | https://www.onpointplumbing.org/ |
| Search title | On Point Plumbing and Heating |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `onpointplumbing.org,approve,yes,,,,`

## 24emergencyrooter.com

| | |
|---|---|
| Website | https://24emergencyrooter.com/ |
| Search title | Emergency Rooter Services |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `24emergencyrooter.com,approve,yes,,,,`

## cantonplumbingcompany.net

| | |
|---|---|
| Website | https://www.cantonplumbingcompany.net/ |
| Search title | Got A Plumber? |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `cantonplumbingcompany.net,approve,yes,,,,`

## wholehousewaterfilter.co

| | |
|---|---|
| Website | https://wholehousewaterfilter.co/ |
| Search title | Whole House Water Filter |
| Found by query | osm:craft=plumber |
| Contact page | https://wholehousewaterfilter.co/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-284ac2dd_inspection_2026-11-02T03-03-14-769Z.jpg)

Suggested CSV line: `wholehousewaterfilter.co,approve,yes,,,,`

## timbeilplumbing.com

| | |
|---|---|
| Website | https://timbeilplumbing.com/ |
| Search title | Tim Beil Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://beilplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required dropdown "Choose a service" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-f5585262_inspection_2026-11-02T03-02-26-845Z.jpg)

Suggested CSV line: `timbeilplumbing.com,approve,yes,,,,`

## mrrooter.com

| | |
|---|---|
| Website | https://www.mrrooter.com/ |
| Search title | Mr. Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://www.mrrooter.com/about/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: No submit button detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-dbbd41d3_inspection_2026-11-02T03-02-51-667Z.jpg)

Suggested CSV line: `mrrooter.com,approve,yes,,,,`

## jollyplumbing.com

| | |
|---|---|
| Website | https://jollyplumbing.com/ |
| Search title | Jolly Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://jollyplumbing.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-4fab3fc1_inspection_2026-11-02T03-03-38-601Z.jpg)

Suggested CSV line: `jollyplumbing.com,approve,yes,,,,`

## paloaltoplumbing.net

| | |
|---|---|
| Website | https://www.paloaltoplumbing.net/ |
| Search title | Palo Alto Plumbing Heating & Air |
| Found by query | osm:craft=plumber |
| Contact page | https://paloaltoplumbing.net/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (hcaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-fa50d586_inspection_2026-11-02T03-03-48-076Z.jpg)

Suggested CSV line: `paloaltoplumbing.net,approve,yes,,,,`

## a1redirooter.org

| | |
|---|---|
| Website | https://a1redirooter.org/ |
| Search title | A1 Redi Rooter |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.a1redirooter.org/
~~~

Suggested CSV line: `a1redirooter.org,approve,yes,,,,`

## innovativeplumbingpros.com

| | |
|---|---|
| Website | https://innovativeplumbingpros.com/ |
| Search title | Innovative Plumbing Pros LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://innovativeplumbingpros.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required zip field "Zip Code(Required)": set sender zip in campaign.json to allow this form
Review: Required field "Describe Issue(Required)" is not a standard field
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-7e03ba95_inspection_2026-11-02T03-00-39-322Z.jpg)

Suggested CSV line: `innovativeplumbingpros.com,approve,yes,,,,`

## apaulseptictankservice.com

| | |
|---|---|
| Website | https://www.apaulseptictankservice.com/ |
| Search title | A Paul's Septic Tank Service |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `apaulseptictankservice.com,approve,yes,,,,`

## georgiaplumbers247.com

| | |
|---|---|
| Website | http://georgiaplumbers247.com/ |
| Search title | Georgia Plumbers 24/7 |
| Found by query | osm:craft=plumber |
| Contact page | http://georgiaplumbers247.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-1ff7754e_inspection_2026-11-02T03-07-18-751Z.jpg)

Suggested CSV line: `georgiaplumbers247.com,approve,yes,,,,`

## floridaplumbinghvac.com

| | |
|---|---|
| Website | https://www.floridaplumbinghvac.com/ |
| Search title | Florida Plumbing HVAC |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `floridaplumbinghvac.com,approve,yes,,,,`

## kellyplumbinginc.com

| | |
|---|---|
| Website | https://www.kellyplumbinginc.com/ |
| Search title | Kelly Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://kellyplumbinginc.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required address field "Street Address of Service": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-7074bca0_inspection_2026-11-02T03-07-42-034Z.jpg)

Suggested CSV line: `kellyplumbinginc.com,approve,yes,,,,`

## alliancedrain.com

| | |
|---|---|
| Website | https://www.alliancedrain.com/ |
| Search title | Alliance Drain & Plumbing LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://www.alliancedrain.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "form_fields[address]": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-134aaf20_inspection_2026-11-02T03-08-03-950Z.jpg)

Suggested CSV line: `alliancedrain.com,approve,yes,,,,`

## beastbayplumbing.com

| | |
|---|---|
| Website | https://www.beastbayplumbing.com/ |
| Search title | Beastbay Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://beastbayplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-2655ee1c_inspection_2026-11-02T03-08-41-107Z.jpg)

Suggested CSV line: `beastbayplumbing.com,approve,yes,,,,`

## k2plumbing.com

| | |
|---|---|
| Website | https://k2plumbing.com/ |
| Search title | K2 Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://k2plumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-d30b7c88_inspection_2026-11-02T03-08-55-422Z.jpg)

Suggested CSV line: `k2plumbing.com,approve,yes,,,,`

## cvplumbingandpools.com

| | |
|---|---|
| Website | https://www.cvplumbingandpools.com/ |
| Search title | CV Plumbing And Pools |
| Found by query | osm:craft=plumber |
| Contact page | https://www.cvplumbingandpools.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/5865d601-a624-4da8-b7b4-d1875e6f5388/run-5865d601_candidate-e8c16f3a_inspection_2026-11-02T03-07-52-475Z.jpg)

Suggested CSV line: `cvplumbingandpools.com,approve,yes,,,,`

## sos247plumbingcorp.com

| | |
|---|---|
| Website | https://www.sos247plumbingcorp.com/ |
| Search title | SOS 24/7 Plumbing Corp |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: Navigation to "https://sos247plumbingcorp.com/" is interrupted by another navigation to "chrome-error://chromewebdata/"
~~~

Suggested CSV line: `sos247plumbingcorp.com,approve,yes,,,,`

## lebeauplumbing.com

| | |
|---|---|
| Website | http://www.lebeauplumbing.com/ |
| Search title | W.F. Lebeau Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `lebeauplumbing.com,approve,yes,,,,`

## ricksplumbinginctx.com

| | |
|---|---|
| Website | https://ricksplumbinginctx.com/ |
| Search title | Rick's Plumbing Inc. |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `ricksplumbinginctx.com,approve,yes,,,,`

## laneplumbingraleigh.com

| | |
|---|---|
| Website | https://laneplumbingraleigh.com/ |
| Search title | Lane Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://laneplumbingraleigh.com/lane-plumbing-contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "Address *": set sender address in campaign.json to allow this form
Review: Required zip field "City / Zip Code *": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-88e2b3a2_inspection_2026-11-02T03-25-10-680Z.jpg)

Suggested CSV line: `laneplumbingraleigh.com,approve,yes,,,,`

## rcszaboplumbing.blog

| | |
|---|---|
| Website | https://richton-park-il.rcszaboplumbing.blog/ |
| Search title | RC Szabo Plumbing Richton Park IL |
| Found by query | osm:craft=plumber |
| Contact page | https://richton-park-il.rcszaboplumbing.blog/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Subdomain richton-park-il.rcszaboplumbing.blog — verify it belongs to the business.
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-e8e8f5fe_inspection_2026-11-02T03-20-42-789Z.jpg)

Suggested CSV line: `rcszaboplumbing.blog,approve,yes,,,,`

## ciampoliplumbing.com

| | |
|---|---|
| Website | https://www.ciampoliplumbing.com/ |
| Search title | Ciampoli Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://ciampoliplumbing.com/en/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-6f940233_inspection_2026-11-02T03-20-58-850Z.jpg)

Suggested CSV line: `ciampoliplumbing.com,approve,yes,,,,`

## magicmec.com

| | |
|---|---|
| Website | https://magicmec.com/ |
| Search title | Magic Mechanical Inc |
| Found by query | osm:craft=plumber |
| Contact page | https://www.magicmec.com/contactus |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-6f53b543_inspection_2026-11-02T03-21-07-094Z.jpg)

Suggested CSV line: `magicmec.com,approve,yes,,,,`

## billhowe.com

| | |
|---|---|
| Website | https://www.billhowe.com/ |
| Search title | Bill Howe Plumbing, Heating & Air, Restoration & Flood Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.billhowe.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required dropdown "Service" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-e941d19e_inspection_2026-11-02T03-21-27-732Z.jpg)

Suggested CSV line: `billhowe.com,approve,yes,,,,`

## acesolvesitall.com

| | |
|---|---|
| Website | https://www.acesolvesitall.com/ |
| Search title | Ace Solves It All |
| Found by query | osm:craft=plumber |
| Contact page | https://www.acesolvesitall.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Are you a new customer?" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-331165c6_inspection_2026-11-02T03-21-37-820Z.jpg)

Suggested CSV line: `acesolvesitall.com,approve,yes,,,,`

## collinspacific.com

| | |
|---|---|
| Website | https://www.collinspacific.com/ |
| Search title | Collins Pacific Plumbing, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.collinspacific.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-19078b4e_inspection_2026-11-02T03-22-01-186Z.jpg)

Suggested CSV line: `collinspacific.com,approve,yes,,,,`

## mccreaheatingplumbing.com

| | |
|---|---|
| Website | https://mccreaheatingplumbing.com/ |
| Search title | McCrea Heating & Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://mccreaheatingplumbing.com/home/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-7cdcc511_inspection_2026-11-02T03-20-04-846Z.jpg)

Suggested CSV line: `mccreaheatingplumbing.com,approve,yes,,,,`

## plumberdearbornmi.info

| | |
|---|---|
| Website | http://www.plumberdearbornmi.info/ |
| Search title | The Dearborn Plumbers |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `plumberdearbornmi.info,approve,yes,,,,`

## drainpros805.com

| | |
|---|---|
| Website | https://www.drainpros805.com/ |
| Search title | Drain Pros |
| Found by query | osm:craft=plumber |
| Contact page | https://drainprosventura.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No message field detected
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-8d847bc9_inspection_2026-11-02T03-22-49-930Z.jpg)

Suggested CSV line: `drainpros805.com,approve,yes,,,,`

## plumberlittlerockar.com

| | |
|---|---|
| Website | https://plumberlittlerockar.com/ |
| Search title | Boggan Plumbing Service |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.plumberlittlerockar.com/
~~~

Suggested CSV line: `plumberlittlerockar.com,approve,yes,,,,`

## ilovemywater.com

| | |
|---|---|
| Website | https://ilovemywater.com/ |
| Search title | Aqua Systems |
| Found by query | osm:craft=plumber |
| Contact page | https://www.aquasystems.com/find-a-dealer-near-you/?Address=0 |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-83421e33_inspection_2026-11-02T03-23-28-333Z.jpg)

Suggested CSV line: `ilovemywater.com,approve,yes,,,,`

## jo-miplumbing.com

| | |
|---|---|
| Website | https://jo-miplumbing.com/ |
| Search title | Jo-Mi Plumbing & Solar |
| Found by query | osm:craft=plumber |
| Contact page | https://jo-miplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-e6ab039f_inspection_2026-11-02T03-23-35-683Z.jpg)

Suggested CSV line: `jo-miplumbing.com,approve,yes,,,,`

## dpservicesfl.com

| | |
|---|---|
| Website | https://dpservicesfl.com/ |
| Search title | Diversified Plumbing Services of SW Florida |
| Found by query | osm:craft=plumber |
| Contact page | https://dpservicesfl.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Address(Required)": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-6f80dfd7_inspection_2026-11-02T03-23-52-333Z.jpg)

Suggested CSV line: `dpservicesfl.com,approve,yes,,,,`

## masterrooter.plumbing

| | |
|---|---|
| Website | https://masterrooter.plumbing/ |
| Search title | Master Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://masterrooter.plumbing/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-f691c76c_inspection_2026-11-02T03-24-51-018Z.jpg)

Suggested CSV line: `masterrooter.plumbing,approve,yes,,,,`

## southbaybuilderssanjose.com

| | |
|---|---|
| Website | https://southbaybuilderssanjose.com/ |
| Search title | South Bay Builders |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `southbaybuilderssanjose.com,approve,yes,,,,`

## plumberofphoenix.com

| | |
|---|---|
| Website | https://plumberofphoenix.com/ |
| Search title | Plumber of Phoenix |
| Found by query | osm:craft=plumber |
| Contact page | https://plumberofphoenix.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-bd17a1cc_inspection_2026-11-02T03-25-41-700Z.jpg)

Suggested CSV line: `plumberofphoenix.com,approve,yes,,,,`

## munsonswaterworksin.com

| | |
|---|---|
| Website | https://munsonswaterworksin.com/ |
| Search title | Munson’s Water Works |
| Found by query | osm:craft=plumber |
| Contact page | https://munsonswaterworksin.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-962ee6cf_inspection_2026-11-02T03-25-59-500Z.jpg)

Suggested CSV line: `munsonswaterworksin.com,approve,yes,,,,`

## ptohomeservice.com

| | |
|---|---|
| Website | https://ptohomeservice.com/ |
| Search title | PTO Home Service & Repairs |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `ptohomeservice.com,approve,yes,,,,`

## zbcgeneralcontracting.com

| | |
|---|---|
| Website | https://zbcgeneralcontracting.com/ |
| Search title | ZBC General Contracting |
| Found by query | osm:craft=plumber |
| Contact page | https://www.zbccontracting.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-da539273_inspection_2026-11-02T03-26-28-492Z.jpg)

Suggested CSV line: `zbcgeneralcontracting.com,approve,yes,,,,`

## gwmclaughlinplumbingpa.com

| | |
|---|---|
| Website | https://gwmclaughlinplumbingpa.com/ |
| Search title | G W McLaughlin Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://www.gwmclaughlinplumbingpa.com/contactus.htm |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-1fe0647d_inspection_2026-11-02T03-26-52-241Z.jpg)

Suggested CSV line: `gwmclaughlinplumbingpa.com,approve,yes,,,,`

## bluebearplumbing.com

| | |
|---|---|
| Website | https://bluebearplumbing.com/ |
| Search title | Blue Bear Home Services - Cape Cod |
| Found by query | osm:craft=plumber |
| Contact page | https://bluebearplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "LAST NAME*": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-50f72f75_inspection_2026-11-02T03-24-20-258Z.jpg)

Suggested CSV line: `bluebearplumbing.com,approve,yes,,,,`

## wallacecon.com

| | |
|---|---|
| Website | https://wallacecon.com/ |
| Search title | Wallace Plumbing and Mechanical |
| Found by query | osm:craft=plumber |
| Contact page | https://technicalaffiliate.com/P2a89b40?utm\_source=wallacecon.com |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-cff6b603_inspection_2026-11-02T03-24-27-410Z.jpg)

Suggested CSV line: `wallacecon.com,approve,yes,,,,`

## jakethesnakedraincleaning.com

| | |
|---|---|
| Website | https://jakethesnakedraincleaning.com/ |
| Search title | Jake The Snake Drain Cleaning |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `jakethesnakedraincleaning.com,approve,yes,,,,`

## whplumbingheating-airconditioning.com

| | |
|---|---|
| Website | https://whplumbingheating-airconditioning.com/ |
| Search title | W H Plumbing Heating and Air Conditioning |
| Found by query | osm:craft=plumber |
| Contact page | https://whplumbingheating-airconditioning.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No email field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-c480863b_inspection_2026-11-02T03-25-31-970Z.jpg)

Suggested CSV line: `whplumbingheating-airconditioning.com,approve,yes,,,,`

## ontimeplumbing.us

| | |
|---|---|
| Website | https://ontimeplumbing.us/ |
| Search title | On Time Plumbing LLC |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.ontimeplumbing.us/
~~~

Suggested CSV line: `ontimeplumbing.us,approve,yes,,,,`

## business.site

| | |
|---|---|
| Website | https://unclog-plumbing-sarasota-fl.business.site/ |
| Search title | Unclog Plumbing Sarasota FL |
| Found by query | osm:craft=plumber |
| Contact page | https://unclog-plumbing-sarasota-fl.business.site/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Subdomain unclog-plumbing-sarasota-fl.business.site — verify it belongs to the business.
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-bf5a0f92_inspection_2026-11-02T03-26-16-641Z.jpg)

Suggested CSV line: `business.site,approve,yes,,,,`

## justcallheritage.com

| | |
|---|---|
| Website | https://justcallheritage.com/ |
| Search title | Heritage Home Service |
| Found by query | osm:craft=plumber |
| Contact page | https://justcallheritage.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Review: Required last name field "client_last_name": set sender lastName in campaign.json to allow this form
Review: Required address field "client_address": set sender address in campaign.json to allow this form
Review: Required zip field "client_zip_code": set sender zip in campaign.json to allow this form
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-3f8ec2f0_inspection_2026-11-02T03-24-10-485Z.jpg)

Suggested CSV line: `justcallheritage.com,approve,yes,,,,`

## ajalberts.com

| | |
|---|---|
| Website | https://ajalberts.com/ |
| Search title | AJ Alberts Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://ajalberts.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-ec5b9c94_inspection_2026-11-02T03-19-47-981Z.jpg)

Suggested CSV line: `ajalberts.com,approve,yes,,,,`

## tromblyplumbing.com

| | |
|---|---|
| Website | https://www.tromblyplumbing.com/ |
| Search title | Jim Trombly Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://tromblyplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Review: Required last name field "Last name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-ace53257_inspection_2026-11-02T03-20-25-477Z.jpg)

Suggested CSV line: `tromblyplumbing.com,approve,yes,,,,`

## waterheaterherotx.com

| | |
|---|---|
| Website | https://waterheaterherotx.com/ |
| Search title | Water Heater Hero |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `waterheaterherotx.com,approve,yes,,,,`

## advanced-plumbing-nyc.com

| | |
|---|---|
| Website | https://www.advanced-plumbing-nyc.com/ |
| Search title | Advanced Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.advanced-plumbing-nyc.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-9a2689d6_inspection_2026-11-02T03-23-04-712Z.jpg)

Suggested CSV line: `advanced-plumbing-nyc.com,approve,yes,,,,`

## fixmyhome.com

| | |
|---|---|
| Website | https://www.fixmyhome.com/ |
| Search title | Fix-it 24/7 Plumbing, Heating, Air & Electric |
| Found by query | osm:craft=plumber |
| Contact page | https://www.fixmyhome.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, turnstile, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-bf11a4db_inspection_2026-11-02T03-26-42-906Z.jpg)

Suggested CSV line: `fixmyhome.com,approve,yes,,,,`

## andersonplumbingheatingandair.com

| | |
|---|---|
| Website | https://www.andersonplumbingheatingandair.com/ |
| Search title | Anderson Plumbing, Heating & Air |
| Found by query | osm:craft=plumber |
| Contact page | https://www.andersonplumbingheatingandair.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-a00fb0ab_inspection_2026-11-02T03-21-16-626Z.jpg)

Suggested CSV line: `andersonplumbingheatingandair.com,approve,yes,,,,`

## shamrockplumbers.com

| | |
|---|---|
| Website | https://shamrockplumbers.com/ |
| Search title | Shamrock Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://shamrockplumbers.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-98a5ce33_inspection_2026-11-02T03-21-52-695Z.jpg)

Suggested CSV line: `shamrockplumbers.com,approve,yes,,,,`

## paladinplumbing.com

| | |
|---|---|
| Website | https://paladinplumbing.com/ |
| Search title | Paladin Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.hurlburthp.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required field "HOW DID YOU HEAR ABOUT US?*" is not a standard field
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-d5562d61_inspection_2026-11-02T03-22-31-793Z.jpg)

Suggested CSV line: `paladinplumbing.com,approve,yes,,,,`

## ikessewerservice.com

| | |
|---|---|
| Website | https://ikessewerservice.com/ |
| Search title | Ike's Sewer Service Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.ikessewerservice.com/contactus.htm |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-1c5e280a_inspection_2026-11-02T03-23-16-057Z.jpg)

Suggested CSV line: `ikessewerservice.com,approve,yes,,,,`

## trusttiger.com

| | |
|---|---|
| Website | https://www.trusttiger.com/ |
| Search title | Tiger |
| Found by query | osm:craft=plumber |
| Contact page | https://www.trusttiger.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-e2c422a8_inspection_2026-11-02T03-27-00-340Z.jpg)

Suggested CSV line: `trusttiger.com,approve,yes,,,,`

## charlescohenplumbingandheating.com

| | |
|---|---|
| Website | https://charlescohenplumbingandheating.com/ |
| Search title | Charles Cohen Plumbing and Heating |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `charlescohenplumbingandheating.com,approve,yes,,,,`

## fullspectrumplumbingllc.com

| | |
|---|---|
| Website | https://fullspectrumplumbingllc.com/ |
| Search title | Full Spectrum Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | https://fullspectrumplumbingllc.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-b0fa45af_inspection_2026-11-02T03-35-50-332Z.jpg)

Suggested CSV line: `fullspectrumplumbingllc.com,approve,yes,,,,`

## waltersandhemming.com

| | |
|---|---|
| Website | https://www.waltersandhemming.com/ |
| Search title | Walters & Hemming |
| Found by query | osm:craft=plumber |
| Contact page | https://www.waltersandhemming.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-1b4ee29a_inspection_2026-11-02T03-31-33-131Z.jpg)

Suggested CSV line: `waltersandhemming.com,approve,yes,,,,`

## azqualityplumbing.com

| | |
|---|---|
| Website | https://azqualityplumbing.com/ |
| Search title | AZ Quality Plumbing LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://azqualityplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-b812bc4d_inspection_2026-11-02T03-35-10-330Z.jpg)

Suggested CSV line: `azqualityplumbing.com,approve,yes,,,,`

## jmplumbingcompany.com

| | |
|---|---|
| Website | https://www.jmplumbingcompany.com/ |
| Search title | JM Constructions |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `jmplumbingcompany.com,approve,yes,,,,`

## straightshooterplumbing.com

| | |
|---|---|
| Website | https://www.straightshooterplumbing.com/ |
| Search title | Straight Shooter Plumbing and Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://www.straightshooterplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is emergency
Review: Required dropdown "select-location" has no truthful option
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-cff55c34_inspection_2026-11-02T03-30-41-988Z.jpg)

Suggested CSV line: `straightshooterplumbing.com,approve,yes,,,,`

## goldenhandhandyman.com

| | |
|---|---|
| Website | https://goldenhandhandyman.com/ |
| Search title | Golden Hand Handyman |
| Found by query | osm:craft=plumber |
| Contact page | https://goldenhandhandyman.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-797a5d8b_inspection_2026-11-02T03-27-40-900Z.jpg)

Suggested CSV line: `goldenhandhandyman.com,approve,yes,,,,`

## johnsonsplumbinginc.net

| | |
|---|---|
| Website | https://johnsonsplumbinginc.net/ |
| Search title | Johnson's Plumbing Inc. |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `johnsonsplumbinginc.net,approve,yes,,,,`

## f6plumbing.com

| | |
|---|---|
| Website | https://www.f6plumbing.com/ |
| Search title | F6 Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.f6plumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-c05fc71c_inspection_2026-11-02T03-30-53-208Z.jpg)

Suggested CSV line: `f6plumbing.com,approve,yes,,,,`

## hometeamplumbers.com

| | |
|---|---|
| Website | https://hometeamplumbers.com/ |
| Search title | Home Team Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://hometeamplumbers.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Requested Service" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-00b34f90_inspection_2026-11-02T03-27-24-576Z.jpg)

Suggested CSV line: `hometeamplumbers.com,approve,yes,,,,`

## alamowatersofteners.com

| | |
|---|---|
| Website | https://www.alamowatersofteners.com/ |
| Search title | Alamo Water Softeners |
| Found by query | osm:craft=plumber |
| Contact page | https://www.alamowatersofteners.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required zip field "Zip*": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-9966adf7_inspection_2026-11-02T03-28-50-926Z.jpg)

Suggested CSV line: `alamowatersofteners.com,approve,yes,,,,`

## 584hero.com

| | |
|---|---|
| Website | https://584hero.com/ |
| Search title | Bear Valley Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://584hero.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required field "cu-fn" is not a standard field
Review: Required field "cu-ln" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-cb710e17_inspection_2026-11-02T03-29-53-900Z.jpg)

Suggested CSV line: `584hero.com,approve,yes,,,,`

## bobemergencyplumbing.com

| | |
|---|---|
| Website | https://www.bobemergencyplumbing.com/ |
| Search title | Bob - Emergency Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `bobemergencyplumbing.com,approve,yes,,,,`

## aspenplumbingjackson.com

| | |
|---|---|
| Website | https://www.aspenplumbingjackson.com/ |
| Search title | Aspen Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.aspenplumbingjackson.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-2a5feca1_inspection_2026-11-02T03-31-10-727Z.jpg)

Suggested CSV line: `aspenplumbingjackson.com,approve,yes,,,,`

## danikaplumbing.com

| | |
|---|---|
| Website | https://danikaplumbing.com/ |
| Search title | Danika Plumbing LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://danikaplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-ea5bedd1_inspection_2026-11-02T03-31-59-825Z.jpg)

Suggested CSV line: `danikaplumbing.com,approve,yes,,,,`

## winsupplyofelmira.com

| | |
|---|---|
| Website | http://winsupplyofelmira.com/ |
| Search title | Winsupply of Elmira |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: Timeout 30000ms exceeded.
~~~

Suggested CSV line: `winsupplyofelmira.com,approve,yes,,,,`

## unclogplumbingservices247.com

| | |
|---|---|
| Website | https://unclogplumbingservices247.com/ |
| Search title | Unclog plumbing 24/7 emergency service Aventura |
| Found by query | osm:craft=plumber |
| Contact page | https://unclogplumbingservices247.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-13a76bff_inspection_2026-11-02T03-33-10-113Z.jpg)

Suggested CSV line: `unclogplumbingservices247.com,approve,yes,,,,`

## ciariplumbing.com

| | |
|---|---|
| Website | http://www.ciariplumbing.com/ |
| Search title | Steve Ciari Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | http://www.ciariplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-f2f5b4e2_inspection_2026-11-02T03-33-24-085Z.jpg)

Suggested CSV line: `ciariplumbing.com,approve,yes,,,,`

## canduplumbing.com

| | |
|---|---|
| Website | https://canduplumbing.com/ |
| Search title | Candu Plumbing & Rooter |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `canduplumbing.com,approve,yes,,,,`

## actionjacksonsepticpumping.com

| | |
|---|---|
| Website | https://actionjacksonsepticpumping.com/ |
| Search title | Action Jackson Septic Pumping |
| Found by query | osm:craft=plumber |
| Contact page | https://actionjacksonsepticpumping.com/?\_\_cf\_chl\_rt\_tk=D1qp5g2QC4dwqId.WvXQrj6X5XV\_LD0Tf5m\_hUxLujo-1793590442-1.0.1.1-p210jgX5MRmu0PgsLjbGDZJh6jvNe5nWA6XltUMd1xI |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-c2abd0b3_inspection_2026-11-02T03-34-02-104Z.jpg)

Suggested CSV line: `actionjacksonsepticpumping.com,approve,yes,,,,`

## simpsonplumbingservice.com

| | |
|---|---|
| Website | https://simpsonplumbingservice.com/ |
| Search title | Simpson Plumbing Service, LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://www.simpsonplumbingservice.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-3ffe5e80_inspection_2026-11-02T03-35-02-626Z.jpg)

Suggested CSV line: `simpsonplumbingservice.com,approve,yes,,,,`

## wixsite.com

| | |
|---|---|
| Website | https://kastlplumbing.wixsite.com/ |
| Search title | Kastl Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://kastlplumbing.wixsite.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Subdomain kastlplumbing.wixsite.com — verify it belongs to the business.
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-d3d72cc4_inspection_2026-11-02T03-27-07-119Z.jpg)

Suggested CSV line: `wixsite.com,approve,yes,,,,`

## homeservices-provider.com

| | |
|---|---|
| Website | https://rph.homeservices-provider.com/ |
| Search title | Rescue Plumbing & Hvac |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Subdomain rph.homeservices-provider.com — verify it belongs to the business.
Inspection error: page.goto: Timeout 30000ms exceeded.
~~~

Suggested CSV line: `homeservices-provider.com,approve,yes,,,,`

## cypressplumbing.com

| | |
|---|---|
| Website | https://cypressplumbing.com/ |
| Search title | Cypress Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://cypressplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-46cf0066_inspection_2026-11-02T03-27-50-791Z.jpg)

Suggested CSV line: `cypressplumbing.com,approve,yes,,,,`

## alphaomegahousig.com

| | |
|---|---|
| Website | http://alphaomegahousig.com/ |
| Search title | Alpha Omega Housing Dev Inc |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `alphaomegahousig.com,approve,yes,,,,`

## theplumbingpros.biz

| | |
|---|---|
| Website | https://theplumbingpros.biz/ |
| Search title | The Plumbing Pros |
| Found by query | osm:craft=plumber |
| Contact page | https://theplumbingpros.biz/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-2c705b5f_inspection_2026-11-02T03-28-43-047Z.jpg)

Suggested CSV line: `theplumbingpros.biz,approve,yes,,,,`

## lawsonfamilyplumbing.com

| | |
|---|---|
| Website | https://lawsonfamilyplumbing.com/ |
| Search title | Lawson Family Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://lawsonfamilyplumbing.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required dropdown "WHAT DO YOU NEED?" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-e84b5704_inspection_2026-11-02T03-30-02-066Z.jpg)

Suggested CSV line: `lawsonfamilyplumbing.com,approve,yes,,,,`

## alphaplumbingwy.com

| | |
|---|---|
| Website | https://alphaplumbingwy.com/ |
| Search title | Alpha Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.alphaplumbingwy.com/contactus.htm |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-c8d18bc2_inspection_2026-11-02T03-30-13-475Z.jpg)

Suggested CSV line: `alphaplumbingwy.com,approve,yes,,,,`

## gulfcoastmarine.com

| | |
|---|---|
| Website | https://www.gulfcoastmarine.com/ |
| Search title | Gulf Coast Marine Supply Co |
| Found by query | osm:craft=plumber |
| Contact page | https://www.gulfcoastmarine.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-d516c4d7_inspection_2026-11-02T03-31-04-327Z.jpg)

Suggested CSV line: `gulfcoastmarine.com,approve,yes,,,,`

## gulfviewplumbing.com

| | |
|---|---|
| Website | https://gulfviewplumbing.com/ |
| Search title | Gulfview Plumbing & Water Treatment |
| Found by query | osm:craft=plumber |
| Contact page | https://gulfviewplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Review: Required zip field "Service ZIP code (required)": set sender zip in campaign.json to allow this form
Review: Required dropdown "What can we help with? (required)

Choose a service
Repiping or water-line replacement
Sewer repair or replacement
Drain cleaning or hydro jetting
Water heater or tankless
Leak repair
Water treatment
Fixture repair or installation
Something else" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-362cefec_inspection_2026-11-02T03-31-47-831Z.jpg)

Suggested CSV line: `gulfviewplumbing.com,approve,yes,,,,`

## jkplumbingsf.com

| | |
|---|---|
| Website | https://www.jkplumbingsf.com/ |
| Search title | JK Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://jkplumbingsf.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-02242166_inspection_2026-11-02T03-33-31-674Z.jpg)

Suggested CSV line: `jkplumbingsf.com,approve,yes,,,,`

## xcelplumbingoc.com

| | |
|---|---|
| Website | https://xcelplumbingoc.com/ |
| Search title | Xcel Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://xcelplumbingoc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-3de3ec0d_inspection_2026-11-02T03-34-10-410Z.jpg)

Suggested CSV line: `xcelplumbingoc.com,approve,yes,,,,`

## goettl.com

| | |
|---|---|
| Website | https://www.goettl.com/ |
| Search title | Goettl Air Conditioning & Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.goettl.com/?\_\_cf\_chl\_rt\_tk=R4jHd4C7QWb9yI8JrhcGEA.034X6fTRtPAa1u5L86RQ-1793590458-1.0.1.1-bxh2\_UNsuCng6eWg4C7yU0HY97qyce85OSyJoQFfD0w |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-a947e4e6_inspection_2026-11-02T03-34-18-510Z.jpg)

Suggested CSV line: `goettl.com,approve,yes,,,,`

## betterplumbingcompany.com

| | |
|---|---|
| Website | https://betterplumbingcompany.com/ |
| Search title | Better Plumbing Company |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `betterplumbingcompany.com,approve,yes,,,,`

## lawrencekansasplumbing.com

| | |
|---|---|
| Website | https://lawrencekansasplumbing.com/ |
| Search title | Pronto-Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://lawrencekansasplumbing.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required field "number-1-5" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-d96de531_inspection_2026-11-02T03-34-43-612Z.jpg)

Suggested CSV line: `lawrencekansasplumbing.com,approve,yes,,,,`

## abcplumbingca.com

| | |
|---|---|
| Website | https://abcplumbingca.com/ |
| Search title | ABC Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://linkdeposits.com/apps/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-33df35b1_inspection_2026-11-02T03-34-54-404Z.jpg)

Suggested CSV line: `abcplumbingca.com,approve,yes,,,,`

## allfloplumbing.com

| | |
|---|---|
| Website | https://www.allfloplumbing.com/ |
| Search title | All-Flo Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://allfloplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-e2913f44_inspection_2026-11-02T03-35-32-195Z.jpg)

Suggested CSV line: `allfloplumbing.com,approve,yes,,,,`

## connersplumbing.com

| | |
|---|---|
| Website | https://connersplumbing.com/ |
| Search title | Charles Conner Plumbing Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://connersplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-49dac558_inspection_2026-11-02T03-35-41-082Z.jpg)

Suggested CSV line: `connersplumbing.com,approve,yes,,,,`

## socalplumberexperts.com

| | |
|---|---|
| Website | https://www.socalplumberexperts.com/ |
| Search title | Socal Plumber Experts |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `socalplumberexperts.com,approve,yes,,,,`

## jdihandymanservicesoh.com

| | |
|---|---|
| Website | https://jdihandymanservicesoh.com/ |
| Search title | JDI Handyman Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.jdihandymanservicesoh.com/contactus.htm |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-0a82e0b5_inspection_2026-11-02T03-27-59-477Z.jpg)

Suggested CSV line: `jdihandymanservicesoh.com,approve,yes,,,,`

## trueplumbingut.com

| | |
|---|---|
| Website | https://www.trueplumbingut.com/ |
| Search title | True Plumbing, Heating and Air |
| Found by query | osm:craft=plumber |
| Contact page | https://trueplumbingut.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-9e4a40de_inspection_2026-11-02T03-28-20-517Z.jpg)

Suggested CSV line: `trueplumbingut.com,approve,yes,,,,`

## kennedyplumbing.com

| | |
|---|---|
| Website | https://kennedyplumbing.com/ |
| Search title | Kennedy Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://kennedyplumbing.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-47f8680b_inspection_2026-11-02T03-34-26-197Z.jpg)

Suggested CSV line: `kennedyplumbing.com,approve,yes,,,,`

## thewaterheaterdude.com

| | |
|---|---|
| Website | https://thewaterheaterdude.com/ |
| Search title | The Water Heater Dude/The Air Guy |
| Found by query | osm:craft=plumber |
| Contact page | https://thewaterheaterdude.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is newsletter
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-f48d5fbe_inspection_2026-11-02T03-33-44-883Z.jpg)

Suggested CSV line: `thewaterheaterdude.com,approve,yes,,,,`

## mrhandyguyservices.com

| | |
|---|---|
| Website | https://mrhandyguyservices.com/ |
| Search title | Mr Handy Guy Services |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `mrhandyguyservices.com,approve,yes,,,,`

## mitchclemmonsplumbing.com

| | |
|---|---|
| Website | https://mitchclemmonsplumbing.com/ |
| Search title | Mitch Clemmons Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://mitchclemmonsplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-01ac4a44_inspection_2026-11-02T03-39-55-063Z.jpg)

Suggested CSV line: `mitchclemmonsplumbing.com,approve,yes,,,,`

## aiprofessionalservicesca.com

| | |
|---|---|
| Website | https://aiprofessionalservicesca.com/ |
| Search title | A & I Professional Services |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `aiprofessionalservicesca.com,approve,yes,,,,`

## northmeckplumbing.com

| | |
|---|---|
| Website | https://www.northmeckplumbing.com/ |
| Search title | North Mecklenburg Plumbing Co Inc |
| Found by query | osm:craft=plumber |
| Contact page | https://www.northmeckplumbing.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-5ddfa60d_inspection_2026-11-02T03-39-30-066Z.jpg)

Suggested CSV line: `northmeckplumbing.com,approve,yes,,,,`

## aandtwellpumpsraleigh.com

| | |
|---|---|
| Website | https://aandtwellpumpsraleigh.com/ |
| Search title | A & T Well and Pump |
| Found by query | osm:craft=plumber |
| Contact page | https://aandtwellpumpsraleigh.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-4afe3046_inspection_2026-11-02T03-40-26-568Z.jpg)

Suggested CSV line: `aandtwellpumpsraleigh.com,approve,yes,,,,`

## plomeriahqj.com

| | |
|---|---|
| Website | https://plomeriahqj.com/ |
| Search title | HQJ Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://plomeriahqj.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-8b4641c7_inspection_2026-11-02T03-40-54-801Z.jpg)

Suggested CSV line: `plomeriahqj.com,approve,yes,,,,`

## tnstandard.com

| | |
|---|---|
| Website | https://tnstandard.com/ |
| Search title | Tennessee Standard Plumbing and Drain |
| Found by query | osm:craft=plumber |
| Contact page | https://www.tnstandard.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is job application
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-6a8b164a_inspection_2026-11-02T03-41-54-449Z.jpg)

Suggested CSV line: `tnstandard.com,approve,yes,,,,`

## elizabethseptic.com

| | |
|---|---|
| Website | https://elizabethseptic.com/ |
| Search title | Elizabeth Septic |
| Found by query | osm:craft=plumber |
| Contact page | https://www.elizabethseptic.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last name*": set sender lastName in campaign.json to allow this form
Review: No submit button detected
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-02fb69bd_inspection_2026-11-02T03-37-03-974Z.jpg)

Suggested CSV line: `elizabethseptic.com,approve,yes,,,,`

## cataniaplumbing.com

| | |
|---|---|
| Website | https://cataniaplumbing.com/ |
| Search title | Catania & Son Plumbing LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://cataniaplumbing.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-df6d66af_inspection_2026-11-02T03-37-40-691Z.jpg)

Suggested CSV line: `cataniaplumbing.com,approve,yes,,,,`

## atlasplumberwestpalmbeach.com

| | |
|---|---|
| Website | https://atlasplumberwestpalmbeach.com/ |
| Search title | Atlas Plumber West Palm Beach |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `atlasplumberwestpalmbeach.com,approve,yes,,,,`

## mrspeedyrooter.com

| | |
|---|---|
| Website | https://mrspeedyrooter.com/ |
| Search title | Mr. Speedy Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://www.mrspeedyrooter.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Review: Required choice (YES! SIGN ME UP. / NO THANKS.) has no truthful option
Review: Required last name field "LAST NAME:": set sender lastName in campaign.json to allow this form
Review: Required zip field "ZIP CODE:": set sender zip in campaign.json to allow this form
Review: Required dropdown "ARE YOU A NEW CUSTOMER?" has no truthful option
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-6b69169e_inspection_2026-11-02T03-38-29-863Z.jpg)

Suggested CSV line: `mrspeedyrooter.com,approve,yes,,,,`

## aaacityplumbing.com

| | |
|---|---|
| Website | https://www.aaacityplumbing.com/ |
| Search title | AAA City Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.aaacityplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-43477de5_inspection_2026-11-02T03-38-02-434Z.jpg)

Suggested CSV line: `aaacityplumbing.com,approve,yes,,,,`

## robertsplumbing.us

| | |
|---|---|
| Website | https://www.robertsplumbing.us/ |
| Search title | Robert's Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://www.robertsplumbing.us/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-123e9271_inspection_2026-11-02T03-37-26-813Z.jpg)

Suggested CSV line: `robertsplumbing.us,approve,yes,,,,`

## goallstar.com

| | |
|---|---|
| Website | https://goallstar.com/ |
| Search title | Allstar Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://goallstar.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-8a52dfeb_inspection_2026-11-02T03-36-50-346Z.jpg)

Suggested CSV line: `goallstar.com,approve,yes,,,,`

## servpronorththorntonbrighton.com

| | |
|---|---|
| Website | https://www.servpronorththorntonbrighton.com/ |
| Search title | SERVPro |
| Found by query | osm:craft=plumber |
| Contact page | https://www.servpro.com/locations/co/servpro-of-north-thornton-brighton |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-e2c9b9e5_inspection_2026-11-02T03-36-43-248Z.jpg)

Suggested CSV line: `servpronorththorntonbrighton.com,approve,yes,,,,`

## coreplumbingsd.com

| | |
|---|---|
| Website | https://www.coreplumbingsd.com/ |
| Search title | Core Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://coreplumbingsd.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name(Required)": set sender lastName in campaign.json to allow this form
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP / Postal Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-cd4ab417_inspection_2026-11-02T03-36-28-754Z.jpg)

Suggested CSV line: `coreplumbingsd.com,approve,yes,,,,`

## franksrepairplumbing.com

| | |
|---|---|
| Website | https://www.franksrepairplumbing.com/ |
| Search title | Frank's Repair Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.franksrepairplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-31813a41_inspection_2026-11-02T03-36-18-465Z.jpg)

Suggested CSV line: `franksrepairplumbing.com,approve,yes,,,,`

## waterworkplumbing.com

| | |
|---|---|
| Website | https://waterworkplumbing.com/ |
| Search title | WaterWork Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://waterworkplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: Required zip field "Zip Code*": set sender zip in campaign.json to allow this form
Review: Required dropdown "How did you find us?*" has no truthful option
Review: Required field "Preferred Date*" is not a standard field
Review: Required dropdown "Time*" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-1ca938f4_inspection_2026-11-02T03-41-38-489Z.jpg)

Suggested CSV line: `waterworkplumbing.com,approve,yes,,,,`

## scottco.com

| | |
|---|---|
| Website | https://scottco.com/ |
| Search title | Scottco |
| Found by query | osm:craft=plumber |
| Contact page | https://scottco.com/about-us/about-us-contact-information/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-c9a649ea_inspection_2026-11-02T03-40-19-198Z.jpg)

Suggested CSV line: `scottco.com,approve,yes,,,,`

## lentheplumber.com

| | |
|---|---|
| Website | https://lentheplumber.com/ |
| Search title | Len the Plumber |
| Found by query | osm:craft=plumber |
| Contact page | https://lentheplumber.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address 1*": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code*": set sender zip in campaign.json to allow this form
Review: Required field "Preferred Appointment Date*" is not a standard field
Review: Required dropdown "Preferred Appointment Time*" has no truthful option
Review: Required dropdown "Are you the owner of the property?*" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-2c10187a_inspection_2026-11-02T03-40-10-468Z.jpg)

Suggested CSV line: `lentheplumber.com,approve,yes,,,,`

## gogorooter.com

| | |
|---|---|
| Website | https://www.gogorooter.com/ |
| Search title | Gogo Rooter Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://gogorooter.com/contact-gogo-rooter/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "Last Name": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-47f3e165_inspection_2026-11-02T03-39-38-216Z.jpg)

Suggested CSV line: `gogorooter.com,approve,yes,,,,`

## giddurdunn.com

| | |
|---|---|
| Website | https://giddurdunn.com/ |
| Search title | GiddurDunn |
| Found by query | osm:craft=plumber |
| Contact page | https://giddurdunn.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-8ed9763a_inspection_2026-11-02T03-37-51-375Z.jpg)

Suggested CSV line: `giddurdunn.com,approve,yes,,,,`

## aplusfamilydraincleaning.com

| | |
|---|---|
| Website | https://aplusfamilydraincleaning.com/ |
| Search title | A Plus Family Drain Cleaning |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `aplusfamilydraincleaning.com,approve,yes,,,,`

## billfrytheplumbingguy.com

| | |
|---|---|
| Website | https://billfrytheplumbingguy.com/ |
| Search title | Bill Fry the Plumbing Guy |
| Found by query | osm:craft=plumber |
| Contact page | https://www.billfrytheplumbingguy.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Which Service do You Need?" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-8c6f2e67_inspection_2026-11-02T03-38-41-502Z.jpg)

Suggested CSV line: `billfrytheplumbingguy.com,approve,yes,,,,`

## greenxllc.com

| | |
|---|---|
| Website | https://greenxllc.com/ |
| Search title | GreenX LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://greenxllc.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-6a39ca28_inspection_2026-11-02T03-39-00-652Z.jpg)

Suggested CSV line: `greenxllc.com,approve,yes,,,,`

## dundonplumbing.com

| | |
|---|---|
| Website | http://dundonplumbing.com/ |
| Search title | Dundon Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | http://dundonplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-31103df7_inspection_2026-11-02T03-39-19-087Z.jpg)

Suggested CSV line: `dundonplumbing.com,approve,yes,,,,`

## aladdinplumbingcorp.com

| | |
|---|---|
| Website | https://www.aladdinplumbingcorp.com/ |
| Search title | Aladdin Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.aladdinplumbingcorp.com/contact-aladdin-plumbing/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
BLOCKED: Form purpose is newsletter
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: No message field detected
Review: No submit button detected
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-588889c3_inspection_2026-11-02T03-40-36-640Z.jpg)

Suggested CSV line: `aladdinplumbingcorp.com,approve,yes,,,,`

## hydroplumbingllc.com

| | |
|---|---|
| Website | https://hydroplumbingllc.com/ |
| Search title | Hydro Plumbing LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://hydroplumbingllc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-0725dd81_inspection_2026-11-02T03-41-04-618Z.jpg)

Suggested CSV line: `hydroplumbingllc.com,approve,yes,,,,`

## pipenwrench.com

| | |
|---|---|
| Website | https://www.pipenwrench.com/ |
| Search title | Pipe and Wrench LLC. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.pipenwrench.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-8b0d9c68_inspection_2026-11-02T03-41-28-792Z.jpg)

Suggested CSV line: `pipenwrench.com,approve,yes,,,,`

## gradeaconstructionlandscapingllc.com

| | |
|---|---|
| Website | https://gradeaconstructionlandscapingllc.com/ |
| Search title | Grade A Construction and Landscaping |
| Found by query | osm:craft=plumber |
| Contact page | https://gradeaconstructionlandscapingllc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-e3216382_inspection_2026-11-02T03-41-44-644Z.jpg)

Suggested CSV line: `gradeaconstructionlandscapingllc.com,approve,yes,,,,`

## stevedhandyman.com

| | |
|---|---|
| Website | https://stevedhandyman.com/ |
| Search title | Steve D Handyman |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `stevedhandyman.com,approve,yes,,,,`

## idealservice.com

| | |
|---|---|
| Website | https://idealservice.com/ |
| Search title | Ideal Plumbing Heating Air Electrical |
| Found by query | osm:craft=plumber |
| Contact page | https://idealservice.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-7d867efa_inspection_2026-11-02T03-42-08-995Z.jpg)

Suggested CSV line: `idealservice.com,approve,yes,,,,`

## scottysplumbingheatingandhydronicspecialist.com

| | |
|---|---|
| Website | https://scottysplumbingheatingandhydronicspecialist.com/ |
| Search title | Scotty's Plumbing and Heating |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `scottysplumbingheatingandhydronicspecialist.com,approve,yes,,,,`

## gregsseweranddrains.com

| | |
|---|---|
| Website | https://www.gregsseweranddrains.com/ |
| Search title | Greg's Sewer & Drains |
| Found by query | osm:craft=plumber |
| Contact page | https://www.gregsseweranddrains.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-cdda49e9_inspection_2026-11-02T03-42-50-659Z.jpg)

Suggested CSV line: `gregsseweranddrains.com,approve,yes,,,,`

## rochesterdrainritemn.com

| | |
|---|---|
| Website | https://rochesterdrainritemn.com/ |
| Search title | Rochester Drain Rite |
| Found by query | osm:craft=plumber |
| Contact page | https://www.rochesterdrainritemn.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-60d88709_inspection_2026-11-02T03-43-02-864Z.jpg)

Suggested CSV line: `rochesterdrainritemn.com,approve,yes,,,,`

## bartokcontrols.com

| | |
|---|---|
| Website | https://bartokcontrols.com/ |
| Search title | Bartok Controls |
| Found by query | osm:craft=plumber |
| Contact page | https://www.bartokcontrols.com/contactus.htm |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-f400ddec_inspection_2026-11-02T03-37-14-856Z.jpg)

Suggested CSV line: `bartokcontrols.com,approve,yes,,,,`

## repipe.pro

| | |
|---|---|
| Website | https://www.repipe.pro/ |
| Search title | Repipe Experts |
| Found by query | osm:craft=plumber |
| Contact page | https://www.repipe.pro/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, turnstile)
Review: Required last name field "Last name *": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-496d447c_inspection_2026-11-02T03-39-11-312Z.jpg)

Suggested CSV line: `repipe.pro,approve,yes,,,,`

## jsconstructionandservice.com

| | |
|---|---|
| Website | http://www.jsconstructionandservice.com/ |
| Search title | J&S Construction and Services LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://www.jsconstructionandservice.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: No submit button detected
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-ff34a7ab_inspection_2026-11-02T03-38-10-828Z.jpg)

Suggested CSV line: `jsconstructionandservice.com,approve,yes,,,,`

## altstadtplumbing.com

| | |
|---|---|
| Website | https://www.altstadtplumbing.com/ |
| Search title | Altstadt Hoffman Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.altstadtplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required zip field "zip": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-a01c2b96_inspection_2026-11-02T03-42-30-748Z.jpg)

Suggested CSV line: `altstadtplumbing.com,approve,yes,,,,`

## smpplumbingcompany.com

| | |
|---|---|
| Website | https://smpplumbingcompany.com/ |
| Search title | SMP Plumbing Company |
| Found by query | osm:craft=plumber |
| Contact page | https://mikehedrickphotography.com/collections/all |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-fd4a56d6_inspection_2026-11-02T03-41-22-672Z.jpg)

Suggested CSV line: `smpplumbingcompany.com,approve,yes,,,,`

## economydrainclean.com

| | |
|---|---|
| Website | https://www.economydrainclean.com/ |
| Search title | Economy drain cleaning & plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://plumbingpals.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-598d0709_inspection_2026-11-02T03-42-18-150Z.jpg)

Suggested CSV line: `economydrainclean.com,approve,yes,,,,`

## allcityplumbingsa.com

| | |
|---|---|
| Website | https://allcityplumbingsa.com/ |
| Search title | All City Plumbing Repairs |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `allcityplumbingsa.com,approve,yes,,,,`

## hddraincleaning.com

| | |
|---|---|
| Website | https://hddraincleaning.com/ |
| Search title | HD Drain Cleaning |
| Found by query | osm:craft=plumber |
| Contact page | https://abcnewsiq.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-db954b2d_inspection_2026-11-02T03-43-31-420Z.jpg)

Suggested CSV line: `hddraincleaning.com,approve,yes,,,,`

## kevinsplumbingandheat.com

| | |
|---|---|
| Website | https://www.kevinsplumbingandheat.com/ |
| Search title | Kevin's Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://lubbocksquare.com/residents/suggestion-box/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is newsletter
Review: No message field detected
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-d199f879_inspection_2026-11-02T03-35-59-108Z.jpg)

Suggested CSV line: `kevinsplumbingandheat.com,approve,yes,,,,`

## raypavoneplumbing-draincleaning.com

| | |
|---|---|
| Website | https://raypavoneplumbing-draincleaning.com/ |
| Search title | Ray Pavone Plumbing Repair & Drain Service |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `raypavoneplumbing-draincleaning.com,approve,yes,,,,`

## guardian.plumbing

| | |
|---|---|
| Website | https://guardian.plumbing/ |
| Search title | Guardian Plumbing LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://guardian.plumbing/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-fc3e630f_inspection_2026-11-02T03-44-49-692Z.jpg)

Suggested CSV line: `guardian.plumbing,approve,yes,,,,`

## protecseptic.com

| | |
|---|---|
| Website | https://protecseptic.com/ |
| Search title | Pro-Tec Septic |
| Found by query | osm:craft=plumber |
| Contact page | https://protecseptic.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-695f5de8_inspection_2026-11-02T03-44-40-682Z.jpg)

Suggested CSV line: `protecseptic.com,approve,yes,,,,`

## sebpolllc.net

| | |
|---|---|
| Website | https://sebpolllc.net/ |
| Search title | Sebpol LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://sebpolllc.net/contact-us-sebpol-nj |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
BLOCKED: Required consent/terms checkbox — never accepted automatically
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-0c073b68_inspection_2026-11-02T03-44-09-500Z.jpg)

Suggested CSV line: `sebpolllc.net,approve,yes,,,,`

## missionac.com

| | |
|---|---|
| Website | https://www.missionac.com/ |
| Search title | Mission AC, Plumbing & Electric Manvel |
| Found by query | osm:craft=plumber |
| Contact page | https://www.missionac.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name(Required)": set sender lastName in campaign.json to allow this form
Review: Required zip field "Zip Code(Required)": set sender zip in campaign.json to allow this form
Review: Required field "Preferred Appointment(Required)" is not a standard field
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-ac77c6f1_inspection_2026-11-02T03-43-41-115Z.jpg)

Suggested CSV line: `missionac.com,approve,yes,,,,`

## unclehuck.com

| | |
|---|---|
| Website | https://unclehuck.com/ |
| Search title | Uncle Huck Rooter and Septic |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.unclehuck.com/
~~~

Suggested CSV line: `unclehuck.com,approve,yes,,,,`

## championplumbingsewer.com

| | |
|---|---|
| Website | https://championplumbingsewer.com/ |
| Search title | Champion Plumbing Sewer & Drain LLC |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website has a broken HTTPS certificate
~~~

Suggested CSV line: `championplumbingsewer.com,approve,yes,,,,`

## nomibath.com

| | |
|---|---|
| Website | https://nomibath.com/ |
| Search title | NOMI - Bathroom Remodeling Dallas Tx |
| Found by query | osm:craft=plumber |
| Contact page | https://nomibath.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/75f6816f-8aa1-448f-b167-f30336a00a87/run-75f6816f_candidate-184a874c_inspection_2026-11-02T03-43-50-227Z.jpg)

Suggested CSV line: `nomibath.com,approve,yes,,,,`

## lost-sheep-ranch.com

| | |
|---|---|
| Website | https://www.lost-sheep-ranch.com/ |
| Search title | Grover Jr. Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.lost-sheep-ranch.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-22f1a3e5_inspection_2026-11-02T04-04-07-092Z.jpg)

Suggested CSV line: `lost-sheep-ranch.com,approve,yes,,,,`

## calltheonyx.com

| | |
|---|---|
| Website | https://calltheonyx.com/ |
| Search title | Onyx Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.calltheonyx.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-ef929b69_inspection_2026-11-02T04-02-21-484Z.jpg)

Suggested CSV line: `calltheonyx.com,approve,yes,,,,`

## kuhnplumbing.com

| | |
|---|---|
| Website | https://www.kuhnplumbing.com/ |
| Search title | Kuhn Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://kuhnplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7716e8f6_inspection_2026-11-02T04-03-40-882Z.jpg)

Suggested CSV line: `kuhnplumbing.com,approve,yes,,,,`

## airstreamplumbingandheating.com

| | |
|---|---|
| Website | https://airstreamplumbingandheating.com/ |
| Search title | Airstream Plumbing & Heating, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.airstreamplumbingandheating.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-391e1a6d_inspection_2026-11-02T04-04-36-513Z.jpg)

Suggested CSV line: `airstreamplumbingandheating.com,approve,yes,,,,`

## eliteperformanceplumbingky.com

| | |
|---|---|
| Website | https://www.eliteperformanceplumbingky.com/ |
| Search title | Elite performance Plumbing, Drain cleaning, and Water heaters |
| Found by query | osm:craft=plumber |
| Contact page | https://eliteperformanceplumbingky.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required dropdown "Service*" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-6c739007_inspection_2026-11-02T04-04-00-153Z.jpg)

Suggested CSV line: `eliteperformanceplumbingky.com,approve,yes,,,,`

## zippitysplitplumbing.com

| | |
|---|---|
| Website | https://zippitysplitplumbing.com/ |
| Search title | Zippity Split Plumbing, Drain Cleaning, and Sewer Repair |
| Found by query | osm:craft=plumber |
| Contact page | https://zippitysplitplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-98cceb1c_inspection_2026-11-02T04-04-15-629Z.jpg)

Suggested CSV line: `zippitysplitplumbing.com,approve,yes,,,,`

## rocksteadyplumbing.com

| | |
|---|---|
| Website | https://www.rocksteadyplumbing.com/ |
| Search title | Rocksteady Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.rocksteadyplumbing.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "l-name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-ef47ee6d_inspection_2026-11-02T04-04-25-412Z.jpg)

Suggested CSV line: `rocksteadyplumbing.com,approve,yes,,,,`

## greatmountainsplumbingnewstrawn.com

| | |
|---|---|
| Website | https://www.greatmountainsplumbingnewstrawn.com/ |
| Search title | Great Mountains Plumbing New Strawn |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `greatmountainsplumbingnewstrawn.com,approve,yes,,,,`

## plumberoftucson.com

| | |
|---|---|
| Website | https://plumberoftucson.com/ |
| Search title | Plumber of Tucson |
| Found by query | osm:craft=plumber |
| Contact page | https://plumberoftucson.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-8bc95e7a_inspection_2026-11-02T04-03-19-158Z.jpg)

Suggested CSV line: `plumberoftucson.com,approve,yes,,,,`

## plumbingandheatingofwillmar.com

| | |
|---|---|
| Website | https://www.plumbingandheatingofwillmar.com/ |
| Search title | Plumbing & Heating of Willlmar, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.plumbingandheatingofwillmar.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-e26ec366_inspection_2026-11-02T04-03-29-893Z.jpg)

Suggested CSV line: `plumbingandheatingofwillmar.com,approve,yes,,,,`

## sewertvplumbing.com

| | |
|---|---|
| Website | https://www.sewertvplumbing.com/ |
| Search title | SewerTV Hydro Jetting and Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.sewertvplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-2e027a1a_inspection_2026-11-02T04-03-48-916Z.jpg)

Suggested CSV line: `sewertvplumbing.com,approve,yes,,,,`

## plumbingandair.com

| | |
|---|---|
| Website | https://plumbingandair.com/ |
| Search title | Redlands & Henry Bush Plumbing, Heating and Air Conditioning |
| Found by query | osm:craft=plumber |
| Contact page | https://plumbingandair.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-cd8bc8c2_inspection_2026-11-02T04-03-07-517Z.jpg)

Suggested CSV line: `plumbingandair.com,approve,yes,,,,`

## undergroundonlynj.com

| | |
|---|---|
| Website | https://undergroundonlynj.com/ |
| Search title | Underground Only |
| Found by query | osm:craft=plumber |
| Contact page | https://undergroundonlynj.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-6613de86_inspection_2026-11-02T04-02-46-126Z.jpg)

Suggested CSV line: `undergroundonlynj.com,approve,yes,,,,`

## mainlineplumbingservice.com

| | |
|---|---|
| Website | https://mainlineplumbingservice.com/ |
| Search title | Mainline Plumbing, Drain Cleaning, and Electrical |
| Found by query | osm:craft=plumber |
| Contact page | https://mainlineplumbingservice.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-00b134cf_inspection_2026-11-02T04-02-29-471Z.jpg)

Suggested CSV line: `mainlineplumbingservice.com,approve,yes,,,,`

## trustfallplumbing.com

| | |
|---|---|
| Website | https://www.trustfallplumbing.com/ |
| Search title | Trustfall Plumbing And Heating Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.trustfallplumbing.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required zip field "Zip Code*": set sender zip in campaign.json to allow this form
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-1e72026d_inspection_2026-11-02T04-02-06-145Z.jpg)

Suggested CSV line: `trustfallplumbing.com,approve,yes,,,,`

## greenenergymech.com

| | |
|---|---|
| Website | https://greenenergymech.com/ |
| Search title | Green Energy AC Heating & Plumbing Repair |
| Found by query | osm:craft=plumber |
| Contact page | https://greenenergymech.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-021adc0e_inspection_2026-11-02T04-00-35-681Z.jpg)

Suggested CSV line: `greenenergymech.com,approve,yes,,,,`

## defenseplumbing.com

| | |
|---|---|
| Website | https://www.defenseplumbing.com/ |
| Search title | Defense Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.defenseplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-31f1c817_inspection_2026-11-02T03-56-59-660Z.jpg)

Suggested CSV line: `defenseplumbing.com,approve,yes,,,,`

## callmyplumbers.com

| | |
|---|---|
| Website | https://www.callmyplumbers.com/ |
| Search title | My Plumbers, LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://www.callmyplumbers.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-bc0a7eea_inspection_2026-11-02T03-57-08-815Z.jpg)

Suggested CSV line: `callmyplumbers.com,approve,yes,,,,`

## utilityplumbingservices.com

| | |
|---|---|
| Website | https://utilityplumbingservices.com/ |
| Search title | Utility Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | https://utilityplumbingservices.com/request-a-quote/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-1d2ddaee_inspection_2026-11-02T03-57-22-390Z.jpg)

Suggested CSV line: `utilityplumbingservices.com,approve,yes,,,,`

## draincleaningut.com

| | |
|---|---|
| Website | https://www.draincleaningut.com/ |
| Search title | Drain X |
| Found by query | osm:craft=plumber |
| Contact page | https://www.draincleaningut.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-e3ccc03e_inspection_2026-11-02T03-58-23-915Z.jpg)

Suggested CSV line: `draincleaningut.com,approve,yes,,,,`

## plumbing-sandiego.net

| | |
|---|---|
| Website | https://plumbing-sandiego.net/ |
| Search title | All American Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://plumbing-sandiego.net/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is newsletter
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-3073dcc3_inspection_2026-11-02T03-58-36-080Z.jpg)

Suggested CSV line: `plumbing-sandiego.net,approve,yes,,,,`

## newflowplumbing.com

| | |
|---|---|
| Website | https://newflowplumbing.com/ |
| Search title | New Flow Plumbing Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.newflowplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-19b13ef7_inspection_2026-11-02T03-59-01-031Z.jpg)

Suggested CSV line: `newflowplumbing.com,approve,yes,,,,`

## wrightjones.com

| | |
|---|---|
| Website | http://www.wrightjones.com/ |
| Search title | Wright-Jones Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://www.wright-jones.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-d7ea27c5_inspection_2026-11-02T03-59-14-828Z.jpg)

Suggested CSV line: `wrightjones.com,approve,yes,,,,`

## millcreekplumbinginc.com

| | |
|---|---|
| Website | https://millcreekplumbinginc.com/ |
| Search title | Millcreek Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://millcreekplumbinginc.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-650c5404_inspection_2026-11-02T03-59-34-062Z.jpg)

Suggested CSV line: `millcreekplumbinginc.com,approve,yes,,,,`

## dooleyservicepro.com

| | |
|---|---|
| Website | https://www.dooleyservicepro.com/ |
| Search title | Dooley Service Pro Septic & Plumbing Repairs |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website has a broken HTTPS certificate
~~~

Suggested CSV line: `dooleyservicepro.com,approve,yes,,,,`

## thewaterheaterwarehouse.com

| | |
|---|---|
| Website | https://thewaterheaterwarehouse.com/ |
| Search title | — |
| Found by query | osm:craft=plumber |
| Contact page | https://thewaterheaterwarehouse.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Review: Required last name field "Last Name *
(required)": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Service Type *
(required)" has no truthful option
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-082fac66_inspection_2026-11-02T04-01-43-744Z.jpg)

Suggested CSV line: `thewaterheaterwarehouse.com,approve,yes,,,,`

## travisandsonsplumbing.com

| | |
|---|---|
| Website | https://www.travisandsonsplumbing.com/ |
| Search title | Travis & Sons Plumbing & Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://www.travisandsonsplumbing.com/request-service |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-2b24401d_inspection_2026-11-02T03-57-36-228Z.jpg)

Suggested CSV line: `travisandsonsplumbing.com,approve,yes,,,,`

## prorootercolorado.com

| | |
|---|---|
| Website | https://prorootercolorado.com/ |
| Search title | Pro Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://prorootercolorado.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-fa4830b5_inspection_2026-11-02T04-01-34-478Z.jpg)

Suggested CSV line: `prorootercolorado.com,approve,yes,,,,`

## absolutelyplumbhappy.com

| | |
|---|---|
| Website | https://absolutelyplumbhappy.com/ |
| Search title | Absolute Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://absolutelyplumbhappy.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7ff68a5f_inspection_2026-11-02T03-57-56-296Z.jpg)

Suggested CSV line: `absolutelyplumbhappy.com,approve,yes,,,,`

## mikewilliams.net

| | |
|---|---|
| Website | https://www.mikewilliams.net/ |
| Search title | Mike Williams |
| Found by query | osm:craft=plumber |
| Contact page | https://www.mikewilliams.net/?\_\_cf\_chl\_rt\_tk=kIvUEBFpUyfsv1AwRTOduDXo6vjR11gjLYxydWSJ06U-1793591926-1.0.1.1-3p66lTplXFLqGQMZ2yOcz1.1V6QGYfeJSmEYbcSbj08 |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-9743a19f_inspection_2026-11-02T03-58-46-128Z.jpg)

Suggested CSV line: `mikewilliams.net,approve,yes,,,,`

## jrswanson.com

| | |
|---|---|
| Website | https://www.jrswanson.com/ |
| Search title | J.R. Swanson Plumbing, Heating & Cooling |
| Found by query | osm:craft=plumber |
| Contact page | https://www.jrswanson.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required dropdown "Location

Location
Western New York
Southwest Florida" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-6cc05fc6_inspection_2026-11-02T04-00-44-914Z.jpg)

Suggested CSV line: `jrswanson.com,approve,yes,,,,`

## leecompany.com

| | |
|---|---|
| Website | https://www.leecompany.com/ |
| Search title | Lee Company Bellevue |
| Found by query | osm:craft=plumber |
| Contact page | https://www.leecompany.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-1b704677_inspection_2026-11-02T04-00-54-448Z.jpg)

Suggested CSV line: `leecompany.com,approve,yes,,,,`

## parthenonplumbing.com

| | |
|---|---|
| Website | https://parthenonplumbing.com/ |
| Search title | Parthenon Plumbing, Heating, & AC Repair |
| Found by query | osm:craft=plumber |
| Contact page | https://parthenonplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-2cf87bc0_inspection_2026-11-02T04-01-00-823Z.jpg)

Suggested CSV line: `parthenonplumbing.com,approve,yes,,,,`

## aceplumbingandrooter.com

| | |
|---|---|
| Website | https://www.aceplumbingandrooter.com/ |
| Search title | Ace Plumbing & Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://www.aceplumbingandrooter.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP / Postal Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-cd5c4607_inspection_2026-11-02T04-01-11-172Z.jpg)

Suggested CSV line: `aceplumbingandrooter.com,approve,yes,,,,`

## stevesplumbinghawaii.com

| | |
|---|---|
| Website | https://www.stevesplumbinghawaii.com/ |
| Search title | Steve’s Plumbing & A/C Service |
| Found by query | osm:craft=plumber |
| Contact page | https://www.stevesplumbinghawaii.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-d36329d3_inspection_2026-11-02T04-02-36-529Z.jpg)

Suggested CSV line: `stevesplumbinghawaii.com,approve,yes,,,,`

## burkeplumbinginc.com

| | |
|---|---|
| Website | https://burkeplumbinginc.com/ |
| Search title | Burke Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://burkeplumbinginc.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "last-name-tp": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-719e5bc3_inspection_2026-11-02T04-02-55-042Z.jpg)

Suggested CSV line: `burkeplumbinginc.com,approve,yes,,,,`

## maysplumbingandconstruction.com

| | |
|---|---|
| Website | http://maysplumbingandconstruction.com/ |
| Search title | Mays Plumbing Services LLC |
| Found by query | osm:craft=plumber |
| Contact page | http://maysplumbingandconstruction.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-8c758673_inspection_2026-11-02T04-04-45-345Z.jpg)

Suggested CSV line: `maysplumbingandconstruction.com,approve,yes,,,,`

## andersenph.com

| | |
|---|---|
| Website | https://www.andersenph.com/ |
| Search title | Andersen Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://www.andersenph.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-311a8aba_inspection_2026-11-02T04-05-07-746Z.jpg)

Suggested CSV line: `andersenph.com,approve,yes,,,,`

## happypipesplumbing.com

| | |
|---|---|
| Website | https://happypipesplumbing.com/ |
| Search title | Happy Pipes Plumbing, Water Heaters, and Septic Services |
| Found by query | osm:craft=plumber |
| Contact page | https://happypipesplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-bba45c27_inspection_2026-11-02T04-05-19-312Z.jpg)

Suggested CSV line: `happypipesplumbing.com,approve,yes,,,,`

## magnoliaplumbingco.com

| | |
|---|---|
| Website | https://magnoliaplumbingco.com/ |
| Search title | Magnolia Plumbing Company |
| Found by query | osm:craft=plumber |
| Contact page | https://magnoliaplumbingco.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name(Required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-c698236d_inspection_2026-11-02T04-05-29-221Z.jpg)

Suggested CSV line: `magnoliaplumbingco.com,approve,yes,,,,`

## calltestoftime.com

| | |
|---|---|
| Website | https://calltestoftime.com/ |
| Search title | Test of Time Plumbing, Heating, Air & Electrical |
| Found by query | osm:craft=plumber |
| Contact page | https://calltestoftime.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-f80aee4f_inspection_2026-11-02T04-05-35-713Z.jpg)

Suggested CSV line: `calltestoftime.com,approve,yes,,,,`

## wootenknockoutplumbing.com

| | |
|---|---|
| Website | https://wootenknockoutplumbing.com/ |
| Search title | Wooten Knockout Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.evaluate: Execution context was destroyed, most likely because of a navigation
~~~

Suggested CSV line: `wootenknockoutplumbing.com,approve,yes,,,,`

## continentalplumbing.net

| | |
|---|---|
| Website | https://www.continentalplumbing.net/ |
| Search title | Continental Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.continentalplumbing.net/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Are you a new customer?" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-81a36a64_inspection_2026-11-02T03-58-09-647Z.jpg)

Suggested CSV line: `continentalplumbing.net,approve,yes,,,,`

## trident-plumbing.com

| | |
|---|---|
| Website | https://www.trident-plumbing.com/ |
| Search title | Trident Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://trident-plumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name(Required)": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-a0153746_inspection_2026-11-02T04-01-58-335Z.jpg)

Suggested CSV line: `trident-plumbing.com,approve,yes,,,,`

## verdaysmartsolutions.com

| | |
|---|---|
| Website | https://verdaysmartsolutions.com/ |
| Search title | Verday Smart Solutions |
| Found by query | osm:craft=plumber |
| Contact page | https://verdaysmartsolutions.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name(Required)": set sender lastName in campaign.json to allow this form
Review: Required field "Preferred Appointment(Required)" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-2735efa5_inspection_2026-11-02T04-05-01-256Z.jpg)

Suggested CSV line: `verdaysmartsolutions.com,approve,yes,,,,`

## harryhayesplumbing.com

| | |
|---|---|
| Website | https://www.harryhayesplumbing.com/ |
| Search title | Harry Hayes Plumbing, Water Heater Repair & Drain Cleaning |
| Found by query | osm:craft=plumber |
| Contact page | https://www.harryhayesplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-4dd58a42_inspection_2026-11-02T04-16-23-753Z.jpg)

Suggested CSV line: `harryhayesplumbing.com,approve,yes,,,,`

## crossbrosplumbing.com

| | |
|---|---|
| Website | https://www.crossbrosplumbing.com/ |
| Search title | Cross Bros. Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.crossbrosplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-dc5e6b4d_inspection_2026-11-02T04-16-42-136Z.jpg)

Suggested CSV line: `crossbrosplumbing.com,approve,yes,,,,`

## rodplumbingtexas.com

| | |
|---|---|
| Website | https://www.rodplumbingtexas.com/ |
| Search title | ROD Plumbing Inc |
| Found by query | osm:craft=plumber |
| Contact page | https://www.rodplumbingtexas.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-73675246_inspection_2026-11-02T04-10-45-346Z.jpg)

Suggested CSV line: `rodplumbingtexas.com,approve,yes,,,,`

## martinspumpingservice.com

| | |
|---|---|
| Website | https://www.martinspumpingservice.com/ |
| Search title | Martins Plumping Service |
| Found by query | osm:craft=plumber |
| Contact page | https://martinspumpingservice.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-b2dd74c7_inspection_2026-11-02T04-10-53-437Z.jpg)

Suggested CSV line: `martinspumpingservice.com,approve,yes,,,,`

## plu68.com

| | |
|---|---|
| Website | https://www.plu68.com/ |
| Search title | Plumbers Local 68 |
| Found by query | osm:craft=plumber |
| Contact page | https://www.plu68.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-733ca30a_inspection_2026-11-02T04-13-32-226Z.jpg)

Suggested CSV line: `plu68.com,approve,yes,,,,`

## andservices.com

| | |
|---|---|
| Website | https://www.andservices.com/ |
| Search title | AND Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.andservices.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-6c14d43b_inspection_2026-11-02T04-06-08-277Z.jpg)

Suggested CSV line: `andservices.com,approve,yes,,,,`

## drainfloplumbing.com

| | |
|---|---|
| Website | https://www.drainfloplumbing.com/ |
| Search title | Drain Flo Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.drainfloplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-37341fee_inspection_2026-11-02T04-06-16-813Z.jpg)

Suggested CSV line: `drainfloplumbing.com,approve,yes,,,,`

## brownsplumb.com

| | |
|---|---|
| Website | https://www.brownsplumb.com/ |
| Search title | Brown's Plumbing Pumps & Spas |
| Found by query | osm:craft=plumber |
| Contact page | https://www.brownsplumb.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-8d05e2e6_inspection_2026-11-02T04-06-45-428Z.jpg)

Suggested CSV line: `brownsplumb.com,approve,yes,,,,`

## monkeyswrenchplumbing.com

| | |
|---|---|
| Website | https://www.monkeyswrenchplumbing.com/ |
| Search title | Monkey's Wrench Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://monkeyswrenchplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Address(Required)": set sender address in campaign.json to allow this form
Review: Required dropdown "Services(Required)" has no truthful option
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-793d2119_inspection_2026-11-02T04-07-03-013Z.jpg)

Suggested CSV line: `monkeyswrenchplumbing.com,approve,yes,,,,`

## azpservices.com

| | |
|---|---|
| Website | https://azpservices.com/ |
| Search title | AZP Services LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://azpservices.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7c113b9a_inspection_2026-11-02T04-10-35-864Z.jpg)

Suggested CSV line: `azpservices.com,approve,yes,,,,`

## jamesarmstrongplumbing.com

| | |
|---|---|
| Website | https://www.jamesarmstrongplumbing.com/ |
| Search title | James Armstrong Plumbing Mesquite |
| Found by query | osm:craft=plumber |
| Contact page | https://www.jamesarmstrongplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-a8224ea5_inspection_2026-11-02T04-11-12-925Z.jpg)

Suggested CSV line: `jamesarmstrongplumbing.com,approve,yes,,,,`

## nancysplumbing.com

| | |
|---|---|
| Website | https://nancysplumbing.com/ |
| Search title | Nancy's Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.nancysplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-b008abe4_inspection_2026-11-02T04-12-17-903Z.jpg)

Suggested CSV line: `nancysplumbing.com,approve,yes,,,,`

## backflowtestpros.com

| | |
|---|---|
| Website | https://www.backflowtestpros.com/ |
| Search title | Backflow Test Pros Los Angeles |
| Found by query | osm:craft=plumber |
| Contact page | https://www.backflowtestpros.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-04820b2d_inspection_2026-11-02T04-14-40-761Z.jpg)

Suggested CSV line: `backflowtestpros.com,approve,yes,,,,`

## callpalmettoplumbing.com

| | |
|---|---|
| Website | https://callpalmettoplumbing.com/ |
| Search title | Palmetto Plumbing, Drain Cleaning & Water Heater Repair |
| Found by query | osm:craft=plumber |
| Contact page | https://callpalmettoplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-48cfd0eb_inspection_2026-11-02T04-16-17-186Z.jpg)

Suggested CSV line: `callpalmettoplumbing.com,approve,yes,,,,`

## 3riversplumbingsanantonio.com

| | |
|---|---|
| Website | https://3riversplumbingsanantonio.com/ |
| Search title | 3 Rivers Plumbing San Antonio |
| Found by query | osm:craft=plumber |
| Contact page | https://3riversplumbingsanantonio.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-f92090a8_inspection_2026-11-02T04-16-33-660Z.jpg)

Suggested CSV line: `3riversplumbingsanantonio.com,approve,yes,,,,`

## callwrightchoiceplumbing.com

| | |
|---|---|
| Website | https://callwrightchoiceplumbing.com/ |
| Search title | Wright Choice Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://callwrightchoiceplumbing.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-81a1a0af_inspection_2026-11-02T04-06-28-132Z.jpg)

Suggested CSV line: `callwrightchoiceplumbing.com,approve,yes,,,,`

## befortplumbingandheating.com

| | |
|---|---|
| Website | https://www.befortplumbingandheating.com/ |
| Search title | Befort Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://befortplumbingandheating.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-08931934_inspection_2026-11-02T04-11-39-925Z.jpg)

Suggested CSV line: `befortplumbingandheating.com,approve,yes,,,,`

## vanguardplumbingservices.com

| | |
|---|---|
| Website | https://vanguardplumbingservices.com/ |
| Search title | Vanguard Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | https://vanguardplumbingservices.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-e1c3bf63_inspection_2026-11-02T04-13-18-852Z.jpg)

Suggested CSV line: `vanguardplumbingservices.com,approve,yes,,,,`

## simmonsplumbingwichita.com

| | |
|---|---|
| Website | https://www.simmonsplumbingwichita.com/ |
| Search title | Simmons Plumbing, Water Heater Repair & Drain Cleaning |
| Found by query | osm:craft=plumber |
| Contact page | https://www.simmonsplumbingwichita.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-5045ba68_inspection_2026-11-02T04-13-25-859Z.jpg)

Suggested CSV line: `simmonsplumbingwichita.com,approve,yes,,,,`

## allhoursplumber.com

| | |
|---|---|
| Website | https://allhoursplumber.com/ |
| Search title | All Hours Plumber |
| Found by query | osm:craft=plumber |
| Contact page | https://allhoursplumber.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required last name field "LAST NAME": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-1ce2e8a1_inspection_2026-11-02T04-13-40-059Z.jpg)

Suggested CSV line: `allhoursplumber.com,approve,yes,,,,`

## kestersonplumbing.com

| | |
|---|---|
| Website | https://kestersonplumbing.com/ |
| Search title | Kesterson Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://kestersonplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-8492f20e_inspection_2026-11-02T04-13-47-929Z.jpg)

Suggested CSV line: `kestersonplumbing.com,approve,yes,,,,`

## benjaminfranklinplumbing.com

| | |
|---|---|
| Website | https://www.benjaminfranklinplumbing.com/ |
| Search title | Benjamin Franklin Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.benjaminfranklinplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-0f5ccaea_inspection_2026-11-02T04-14-25-218Z.jpg)

Suggested CSV line: `benjaminfranklinplumbing.com,approve,yes,,,,`

## sunsetcliffsplumbing.com

| | |
|---|---|
| Website | https://www.sunsetcliffsplumbing.com/ |
| Search title | Sunset Cliffs Plumbing, Water Heater Repair & Drain Cleaning |
| Found by query | osm:craft=plumber |
| Contact page | https://www.sunsetcliffsplumbing.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is emergency
Review: Required dropdown "Services*" has no truthful option
Review: No message field detected
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-d25d79c9_inspection_2026-11-02T04-14-54-575Z.jpg)

Suggested CSV line: `sunsetcliffsplumbing.com,approve,yes,,,,`

## pilotplumbingma.com

| | |
|---|---|
| Website | https://www.pilotplumbingma.com/ |
| Search title | Pilot Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://www.pilotplumbingma.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7066ad10_inspection_2026-11-02T04-15-17-067Z.jpg)

Suggested CSV line: `pilotplumbingma.com,approve,yes,,,,`

## miplomeroenphoenix.com

| | |
|---|---|
| Website | https://www.miplomeroenphoenix.com/ |
| Search title | Plomero en Phoenix |
| Found by query | osm:craft=plumber |
| Contact page | https://www.miplomeroenphoenix.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-9cb58814_inspection_2026-11-02T04-15-35-990Z.jpg)

Suggested CSV line: `miplomeroenphoenix.com,approve,yes,,,,`

## charlotteplumbingmasters.com

| | |
|---|---|
| Website | https://www.charlotteplumbingmasters.com/ |
| Search title | Charlotte Plumbing Masters |
| Found by query | osm:craft=plumber |
| Contact page | https://www.charlotteplumbingmasters.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-9b5e5f59_inspection_2026-11-02T04-15-55-878Z.jpg)

Suggested CSV line: `charlotteplumbingmasters.com,approve,yes,,,,`

## timsqualityplumbing.com

| | |
|---|---|
| Website | https://timsqualityplumbing.com/ |
| Search title | Tim's Quality Plumbing, Heating, & Cooling |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH at https://timsqualityplumbing.com/
~~~

Suggested CSV line: `timsqualityplumbing.com,approve,yes,,,,`

## plumberparkercolorado.com

| | |
|---|---|
| Website | https://www.plumberparkercolorado.com/ |
| Search title | Doyle Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://plumberparkercolorado.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-db475d1d_inspection_2026-11-02T04-17-05-555Z.jpg)

Suggested CSV line: `plumberparkercolorado.com,approve,yes,,,,`

## deansplumbingtx.com

| | |
|---|---|
| Website | https://www.deansplumbingtx.com/ |
| Search title | Dean's Plumbing, Drain Cleaning, Sewer & Water Heater Repair |
| Found by query | osm:craft=plumber |
| Contact page | https://www.deansplumbingtx.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-aeeff89e_inspection_2026-11-02T04-05-42-213Z.jpg)

Suggested CSV line: `deansplumbingtx.com,approve,yes,,,,`

## plu68benefitfunds.com

| | |
|---|---|
| Website | https://plu68benefitfunds.com/ |
| Search title | Plumbers Local Union No. 68 Group Protection Plan and Benefit Office |
| Found by query | osm:craft=plumber |
| Contact page | https://plu68benefitfunds.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-c1ab99e5_inspection_2026-11-02T04-05-57-941Z.jpg)

Suggested CSV line: `plu68benefitfunds.com,approve,yes,,,,`

## alphaomegadrain.com

| | |
|---|---|
| Website | https://alphaomegadrain.com/ |
| Search title | Alpha & Omega Plumbing & Drain Cleaning |
| Found by query | osm:craft=plumber |
| Contact page | https://alphaomegadrain.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Untitled*" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-b56be143_inspection_2026-11-02T04-06-55-508Z.jpg)

Suggested CSV line: `alphaomegadrain.com,approve,yes,,,,`

## caswellhomeservices.com

| | |
|---|---|
| Website | https://caswellhomeservices.com/ |
| Search title | Caswell Plumbing and Heating |
| Found by query | osm:craft=plumber |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website froze the browser (Website inspection took longer than 180 s); skipped
~~~

Suggested CSV line: `caswellhomeservices.com,approve,yes,,,,`

## reliantplumbingandrooter.com

| | |
|---|---|
| Website | https://reliantplumbingandrooter.com/ |
| Search title | Reliant Plumbing & Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://reliantplumbingandrooter.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7d0a662b_inspection_2026-11-02T04-10-16-833Z.jpg)

Suggested CSV line: `reliantplumbingandrooter.com,approve,yes,,,,`

## precisionplumbing.com

| | |
|---|---|
| Website | https://precisionplumbing.com/ |
| Search title | Precision Plumbing, Heating, Cooling & Electric |
| Found by query | osm:craft=plumber |
| Contact page | https://precisionplumbing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-dc2e25e1_inspection_2026-11-02T04-10-28-066Z.jpg)

Suggested CSV line: `precisionplumbing.com,approve,yes,,,,`

## primeplumbingheating.com

| | |
|---|---|
| Website | https://www.primeplumbingheating.com/ |
| Search title | Prime Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://www.primeplumbingheating.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-0c986b82_inspection_2026-11-02T04-11-22-189Z.jpg)

Suggested CSV line: `primeplumbingheating.com,approve,yes,,,,`

## pinkduckplumbing.com

| | |
|---|---|
| Website | https://www.pinkduckplumbing.com/ |
| Search title | Pink Duck Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://pinkduckplumbing.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-953c5da4_inspection_2026-11-02T04-11-58-539Z.jpg)

Suggested CSV line: `pinkduckplumbing.com,approve,yes,,,,`

## driptoohardplumbing.com

| | |
|---|---|
| Website | https://www.driptoohardplumbing.com/ |
| Search title | Drip Too Hard Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.driptoohardplumbing.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required dropdown "Service Category" has no truthful option
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-5175ee34_inspection_2026-11-02T04-13-57-356Z.jpg)

Suggested CSV line: `driptoohardplumbing.com,approve,yes,,,,`

## happyhiller.com

| | |
|---|---|
| Website | https://happyhiller.com/ |
| Search title | Hiller Plumbing, Heating, Cooling & Electrical |
| Found by query | osm:craft=plumber |
| Contact page | https://happyhiller.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is newsletter
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-de645367_inspection_2026-11-02T04-14-07-918Z.jpg)

Suggested CSV line: `happyhiller.com,approve,yes,,,,`

## pelicanplumbers.com

| | |
|---|---|
| Website | http://pelicanplumbers.com/ |
| Search title | Pelican Plumber |
| Found by query | osm:craft=plumber |
| Contact page | http://pelicanplumbers.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-1caf8286_inspection_2026-11-02T04-15-02-346Z.jpg)

Suggested CSV line: `pelicanplumbers.com,approve,yes,,,,`

## heritageplumbingvegas.com

| | |
|---|---|
| Website | https://heritageplumbingvegas.com/ |
| Search title | Heritage Plumbing & Drain |
| Found by query | osm:craft=plumber |
| Contact page | https://heritageplumbingvegas.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-a71fd844_inspection_2026-11-02T04-15-08-691Z.jpg)

Suggested CSV line: `heritageplumbingvegas.com,approve,yes,,,,`

## getlitva.com

| | |
|---|---|
| Website | https://www.getlitva.com/ |
| Search title | Get Lit Electricians & Plumbers - Electrical Panel Upgrades & Water Heater Repair |
| Found by query | osm:craft=plumber |
| Contact page | https://www.getlitva.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-02247062_inspection_2026-11-02T04-15-27-394Z.jpg)

Suggested CSV line: `getlitva.com,approve,yes,,,,`

## expressplumbingidaho.com

| | |
|---|---|
| Website | https://expressplumbingidaho.com/ |
| Search title | Express Plumbing Heating & Air |
| Found by query | osm:craft=plumber |
| Contact page | https://www.expressplumbingidaho.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-3a11c6eb_inspection_2026-11-02T04-17-16-475Z.jpg)

Suggested CSV line: `expressplumbingidaho.com,approve,yes,,,,`

## mikediamondservices.com

| | |
|---|---|
| Website | https://www.mikediamondservices.com/ |
| Search title | Mike Diamond Plumbing, HVAC & Electrical |
| Found by query | osm:craft=plumber |
| Contact page | https://mikediamondservices.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "Address(Required)": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code(Required)": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7b4543c2_inspection_2026-11-02T04-17-28-581Z.jpg)

Suggested CSV line: `mikediamondservices.com,approve,yes,,,,`

## heinertplumbing.com

| | |
|---|---|
| Website | https://heinertplumbing.com/ |
| Search title | Heinert Plumbing and Drain LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://heinertplumbing.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-f5b9a7d0_inspection_2026-11-02T04-15-43-430Z.jpg)

Suggested CSV line: `heinertplumbing.com,approve,yes,,,,`

## littletonhotwaterheater.com

| | |
|---|---|
| Website | https://littletonhotwaterheater.com/ |
| Search title | Littleton Hot Water Heaters LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://littletonhotwaterheater.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
BLOCKED: Form requires login
BLOCKED: Form purpose is login
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: login
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-4a72504b_inspection_2026-11-02T04-16-51-183Z.jpg)

Suggested CSV line: `littletonhotwaterheater.com,approve,yes,,,,`

## jcroofconstruction.com

| | |
|---|---|
| Website | http://jcroofconstruction.com/ |
| Search title | JC Roof Construction LLC |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `jcroofconstruction.com,approve,yes,,,,`

## bergext.com

| | |
|---|---|
| Website | https://www.bergext.com/ |
| Search title | Berg Roofing and Home Improvement |
| Found by query | osm:craft=roofer |
| Contact page | https://www.bergext.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required address field "Street Address**": set sender address in campaign.json to allow this form
Review: Required dropdown "State**" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-2f79dc21_inspection_2026-11-02T04-23-49-250Z.jpg)

Suggested CSV line: `bergext.com,approve,yes,,,,`

## westernroofco.com

| | |
|---|---|
| Website | https://www.westernroofco.com/ |
| Search title | Western Roof Co. |
| Found by query | osm:craft=roofer |
| Contact page | https://westernroofco.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-fb990d8b_inspection_2026-11-02T04-24-07-556Z.jpg)

Suggested CSV line: `westernroofco.com,approve,yes,,,,`

## daysaluminumandvinyl.com

| | |
|---|---|
| Website | http://www.daysaluminumandvinyl.com/ |
| Search title | Days Aluminum & Vinyl |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `daysaluminumandvinyl.com,approve,yes,,,,`

## woolleysgutterexperts.com

| | |
|---|---|
| Website | https://www.woolleysgutterexperts.com/ |
| Search title | Woolley's Gutter Experts |
| Found by query | osm:craft=roofer |
| Contact page | https://www.woolleysgutterexperts.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-28c2f9e5_inspection_2026-11-02T04-24-44-520Z.jpg)

Suggested CSV line: `woolleysgutterexperts.com,approve,yes,,,,`

## pacificwestroofing.com

| | |
|---|---|
| Website | https://www.pacificwestroofing.com/ |
| Search title | Pacific West Roofing, LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://pacificwestroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-a8440db5_inspection_2026-11-02T04-25-07-752Z.jpg)

Suggested CSV line: `pacificwestroofing.com,approve,yes,,,,`

## roofdoctorutah.com

| | |
|---|---|
| Website | https://www.roofdoctorutah.com/ |
| Search title | The Roof Doctor |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website has a broken HTTPS certificate
~~~

Suggested CSV line: `roofdoctorutah.com,approve,yes,,,,`

## fontaineweatherproofing.com

| | |
|---|---|
| Website | https://fontaineweatherproofing.com/ |
| Search title | Fontaine Weatherproofing: Roofing Decking Gutters |
| Found by query | osm:craft=roofer |
| Contact page | http://fontaine-roofing.com/?\_\_cf\_chl\_rt\_tk=E\_nieqkwijxICUTv5YU9XQI7blCkYB5y3IL8jUVyxjs-1793593195-1.0.1.1-d8piUgceCH9T6cDZ5SeAPkXH8CdEe7IiReX15dtDZ0U |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7520d18d_inspection_2026-11-02T04-19-55-578Z.jpg)

Suggested CSV line: `fontaineweatherproofing.com,approve,yes,,,,`

## sharedstorieshandr.com

| | |
|---|---|
| Website | https://sharedstorieshandr.com/ |
| Search title | Shared Stories Home and Remodeling |
| Found by query | osm:craft=roofer |
| Contact page | https://sharedstorieshandr.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-e5e825a5_inspection_2026-11-02T04-19-15-000Z.jpg)

Suggested CSV line: `sharedstorieshandr.com,approve,yes,,,,`

## arizonaroofrescue.com

| | |
|---|---|
| Website | https://www.arizonaroofrescue.com/ |
| Search title | Arizona Roof Rescue |
| Found by query | osm:craft=roofer |
| Contact page | https://www.arizonaroofrescue.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-e5eddedc_inspection_2026-11-02T04-17-52-866Z.jpg)

Suggested CSV line: `arizonaroofrescue.com,approve,yes,,,,`

## goldenspikeroofing.com

| | |
|---|---|
| Website | https://www.goldenspikeroofing.com/ |
| Search title | Golden Spike Roofing Inc |
| Found by query | osm:craft=roofer |
| Contact page | https://goldenspikeroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7ca44212_inspection_2026-11-02T04-17-44-595Z.jpg)

Suggested CSV line: `goldenspikeroofing.com,approve,yes,,,,`

## roofingcompaniesclintontownship.com

| | |
|---|---|
| Website | http://roofingcompaniesclintontownship.com/ |
| Search title | Roof Giant Clinton Township |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `roofingcompaniesclintontownship.com,approve,yes,,,,`

## jewettroofing.com

| | |
|---|---|
| Website | https://www.jewettroofing.com/ |
| Search title | Jewett Roofing Company |
| Found by query | osm:craft=roofer |
| Contact page | https://jewettroofing.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-94d58fcd_inspection_2026-11-02T04-24-56-899Z.jpg)

Suggested CSV line: `jewettroofing.com,approve,yes,,,,`

## roofingcompaniessterlingheights.com

| | |
|---|---|
| Website | https://roofingcompaniessterlingheights.com/ |
| Search title | Roof Giant Sterling Heights |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `roofingcompaniessterlingheights.com,approve,yes,,,,`

## hailmayday.com

| | |
|---|---|
| Website | https://www.hailmayday.com/ |
| Search title | Mayday Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://www.hailmayday.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code": set sender zip in campaign.json to allow this form
Review: Required dropdown "What service are you interested in?" has no truthful option
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-45717cab_inspection_2026-11-02T04-23-58-985Z.jpg)

Suggested CSV line: `hailmayday.com,approve,yes,,,,`

## kramroofing.com

| | |
|---|---|
| Website | https://kramroofing.com/ |
| Search title | K-Ram Roofing Albuquerque |
| Found by query | osm:craft=roofer |
| Contact page | https://www.kramroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required dropdown "Select Service *" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-29df2132_inspection_2026-11-02T04-20-03-213Z.jpg)

Suggested CSV line: `kramroofing.com,approve,yes,,,,`

## hi-techroofing.net

| | |
|---|---|
| Website | http://hi-techroofing.net/ |
| Search title | Hi-Tech Roofing & Home Service |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `hi-techroofing.net,approve,yes,,,,`

## masterroofingpro.com

| | |
|---|---|
| Website | https://masterroofingpro.com/ |
| Search title | Master Roofing Systems |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `masterroofingpro.com,approve,yes,,,,`

## allsurfacepdx.com

| | |
|---|---|
| Website | https://www.allsurfacepdx.com/ |
| Search title | All Surface Roofing & Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://www.allsurfacepdx.com/roofing-company/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-eaeeb98e_inspection_2026-11-02T04-21-46-318Z.jpg)

Suggested CSV line: `allsurfacepdx.com,approve,yes,,,,`

## highplainswaterproofing.com

| | |
|---|---|
| Website | https://www.highplainswaterproofing.com/ |
| Search title | High Plains Waterproofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.highplainswaterproofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-e0ba2e48_inspection_2026-11-02T04-22-18-067Z.jpg)

Suggested CSV line: `highplainswaterproofing.com,approve,yes,,,,`

## pwroofingfayetteville.com

| | |
|---|---|
| Website | https://www.pwroofingfayetteville.com/ |
| Search title | PW Roofing & Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://www.pwroofingfayetteville.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-23e74cf5_inspection_2026-11-02T04-22-57-444Z.jpg)

Suggested CSV line: `pwroofingfayetteville.com,approve,yes,,,,`

## arealadvantageconstruction.com

| | |
|---|---|
| Website | https://www.arealadvantageconstruction.com/ |
| Search title | A Real Advantage Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://arealadvantageconstruction.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-6c2ee2b1_inspection_2026-11-02T04-23-14-442Z.jpg)

Suggested CSV line: `arealadvantageconstruction.com,approve,yes,,,,`

## roofingcompaniesmacomb.com

| | |
|---|---|
| Website | https://roofingcompaniesmacomb.com/ |
| Search title | Roof Giant Macomb |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `roofingcompaniesmacomb.com,approve,yes,,,,`

## jksroofingllc.com

| | |
|---|---|
| Website | https://www.jksroofingllc.com/ |
| Search title | JKS Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://jksroofingllc.com/free-project-assessment/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "wpforms[fields][6]": set sender address in campaign.json to allow this form
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-71eefef8_inspection_2026-11-02T04-22-00-235Z.jpg)

Suggested CSV line: `jksroofingllc.com,approve,yes,,,,`

## jimmysroofing.com

| | |
|---|---|
| Website | https://jimmysroofing.com/ |
| Search title | Jimmy's Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://jimmysroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "last-name": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-e0a95bda_inspection_2026-11-02T04-21-21-091Z.jpg)

Suggested CSV line: `jimmysroofing.com,approve,yes,,,,`

## skylineroofrestoration.com

| | |
|---|---|
| Website | http://www.skylineroofrestoration.com/ |
| Search title | Skyline Roof Restoration |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: Navigation to "http://skylineroofrestoration.com/" is interrupted by another navigation to "chrome-error://chromewebdata/"
~~~

Suggested CSV line: `skylineroofrestoration.com,approve,yes,,,,`

## hastings-silverconstruction.com

| | |
|---|---|
| Website | http://hastings-silverconstruction.com/ |
| Search title | Hastings-Silver Construction |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `hastings-silverconstruction.com,approve,yes,,,,`

## crroofingllc.com

| | |
|---|---|
| Website | http://crroofingllc.com/ |
| Search title | C & R Roofing LLC |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `crroofingllc.com,approve,yes,,,,`

## americanmetalroofs.com

| | |
|---|---|
| Website | https://www.americanmetalroofs.com/ |
| Search title | American Metal Roofs |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `americanmetalroofs.com,approve,yes,,,,`

## allstateroofingaz.com

| | |
|---|---|
| Website | https://www.allstateroofingaz.com/ |
| Search title | Phoenix Roofers by Allstate Roofing Contractors |
| Found by query | osm:craft=roofer |
| Contact page | https://www.allstateroofingaz.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "your-lastname": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-9a2d8e54_inspection_2026-11-02T04-19-48-539Z.jpg)

Suggested CSV line: `allstateroofingaz.com,approve,yes,,,,`

## mastercraftroofingsidingwindows.com

| | |
|---|---|
| Website | https://www.mastercraftroofingsidingwindows.com/ |
| Search title | MasterCraft Roofing Siding Windows |
| Found by query | osm:craft=roofer |
| Contact page | https://www.mastercraftroofingsidingwindows.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Result was a deep page; homepage will be inspected.
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-14fb3564_inspection_2026-11-02T04-22-34-125Z.jpg)

Suggested CSV line: `mastercraftroofingsidingwindows.com,approve,yes,,,,`

## kutschroofing.com

| | |
|---|---|
| Website | https://kutschroofing.com/ |
| Search title | Kutsch Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.kutschroofing.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Enter Full Address *": set sender address in campaign.json to allow this form
Review: Required dropdown "Choose Service *" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-c27e17be_inspection_2026-11-02T04-20-48-344Z.jpg)

Suggested CSV line: `kutschroofing.com,approve,yes,,,,`

## spsroof.com

| | |
|---|---|
| Website | https://spsroof.com/ |
| Search title | SPS Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://spsroof.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7b14c7d9_inspection_2026-11-02T04-18-06-963Z.jpg)

Suggested CSV line: `spsroof.com,approve,yes,,,,`

## elevatedroofing.com

| | |
|---|---|
| Website | https://elevatedroofing.com/ |
| Search title | Elevated Roofing, LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://elevatedroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-7fb25a1c_inspection_2026-11-02T04-18-37-818Z.jpg)

Suggested CSV line: `elevatedroofing.com,approve,yes,,,,`

## nelsoncontractingllc.com

| | |
|---|---|
| Website | https://www.nelsoncontractingllc.com/ |
| Search title | Nelson Contracting, LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.nelsoncontractingllc.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-45836b97_inspection_2026-11-02T04-18-50-468Z.jpg)

Suggested CSV line: `nelsoncontractingllc.com,approve,yes,,,,`

## triumphroofing.net

| | |
|---|---|
| Website | https://www.triumphroofing.net/ |
| Search title | Triumph Roofing and Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://www.triumphroofing.net/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-6d83bb86_inspection_2026-11-02T04-19-00-010Z.jpg)

Suggested CSV line: `triumphroofing.net,approve,yes,,,,`

## whitecastleroofing.com

| | |
|---|---|
| Website | https://whitecastleroofing.com/ |
| Search title | White Castle Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://whitecastleroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-6eb0171a_inspection_2026-11-02T04-23-26-570Z.jpg)

Suggested CSV line: `whitecastleroofing.com,approve,yes,,,,`

## allstarproexteriors.com

| | |
|---|---|
| Website | http://www.allstarproexteriors.com/ |
| Search title | All Star Pro Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `allstarproexteriors.com,approve,yes,,,,`

## maxwellbuildingservices.com

| | |
|---|---|
| Website | https://www.maxwellbuildingservices.com/ |
| Search title | Maxwell Building Services |
| Found by query | osm:craft=roofer |
| Contact page | https://maxwellbuildingservices.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Project Type(Required)" has no truthful option
Review: Required dropdown "Rough Project Budget?(Required)" has no truthful option
Review: Required dropdown "When Do You Want To Start(Required)" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-f3a8e186_inspection_2026-11-02T04-19-40-273Z.jpg)

Suggested CSV line: `maxwellbuildingservices.com,approve,yes,,,,`

## raleighresidentialcontractor.com

| | |
|---|---|
| Website | https://www.raleighresidentialcontractor.com/ |
| Search title | Otto's Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable
~~~

Suggested CSV line: `raleighresidentialcontractor.com,approve,yes,,,,`

## cornerstoneroofing.com

| | |
|---|---|
| Website | https://www.cornerstoneroofing.com/ |
| Search title | Cornerstone Roofing, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://cornerstoneroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-8b1d94d4_inspection_2026-11-02T04-20-39-765Z.jpg)

Suggested CSV line: `cornerstoneroofing.com,approve,yes,,,,`

## sheltonroof.com

| | |
|---|---|
| Website | https://sheltonroof.com/ |
| Search title | Shelton Roofing Company |
| Found by query | osm:craft=roofer |
| Contact page | https://sheltonroof.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-3b5addb6_inspection_2026-11-02T04-21-00-441Z.jpg)

Suggested CSV line: `sheltonroof.com,approve,yes,,,,`

## mygreenform.com

| | |
|---|---|
| Website | https://mygreenform.com/ |
| Search title | GreenForm Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://mygreenform.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-614ea62e_inspection_2026-11-02T04-22-44-801Z.jpg)

Suggested CSV line: `mygreenform.com,approve,yes,,,,`

## blueskyroofingaz.com

| | |
|---|---|
| Website | https://blueskyroofingaz.com/ |
| Search title | Blue Sky Roofing LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://blueskyroofingaz.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-0cd110e3_inspection_2026-11-02T04-23-05-600Z.jpg)

Suggested CSV line: `blueskyroofingaz.com,approve,yes,,,,`

## kiddroof.com

| | |
|---|---|
| Website | https://www.kiddroof.com/ |
| Search title | Kidd Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.kiddroof.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required zip field "Zip": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-05a4997a_inspection_2026-11-02T04-24-32-298Z.jpg)

Suggested CSV line: `kiddroof.com,approve,yes,,,,`

## bluebonnetroofers.com

| | |
|---|---|
| Website | https://austin.bluebonnetroofers.com/ |
| Search title | Bluebonnet Roofers |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Subdomain austin.bluebonnetroofers.com — verify it belongs to the business.
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `bluebonnetroofers.com,approve,yes,,,,`

## garywilbertroofing.com

| | |
|---|---|
| Website | https://garywilbertroofing.com/ |
| Search title | Gary Wilbert Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: robots.txt disallows automated access to the site
~~~

Suggested CSV line: `garywilbertroofing.com,approve,yes,,,,`

## cedarparkroofingandwaterdamage.com

| | |
|---|---|
| Website | https://cedarparkroofingandwaterdamage.com/ |
| Search title | Water Damage & Roofing of Cedar Park |
| Found by query | osm:craft=roofer |
| Contact page | https://cedarparkroofingandwaterdamage.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-61455cd9_inspection_2026-11-02T04-25-56-755Z.jpg)

Suggested CSV line: `cedarparkroofingandwaterdamage.com,approve,yes,,,,`

## austinroofingandwaterdamage.com

| | |
|---|---|
| Website | https://austinroofingandwaterdamage.com/ |
| Search title | Water Damage & Roofing of Austin |
| Found by query | osm:craft=roofer |
| Contact page | https://austinroofingandwaterdamage.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required zip field "Number*": set sender zip in campaign.json to allow this form
Review: No email field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-424d61da_inspection_2026-11-02T04-25-31-324Z.jpg)

Suggested CSV line: `austinroofingandwaterdamage.com,approve,yes,,,,`

## baschnagel.com

| | |
|---|---|
| Website | https://www.baschnagel.com/ |
| Search title | Baschnagel Bros inc. |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Invalid request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/69bba411-2718-4ba2-8fde-e116fc7a7fbb/run-69bba411_candidate-718923c0_inspection_2026-11-02T04-25-44-847Z.jpg)

Suggested CSV line: `baschnagel.com,approve,yes,,,,`

## theroofingcompanyfl.com

| | |
|---|---|
| Website | https://theroofingcompanyfl.com/ |
| Search title | The Roofing Company Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://theroofingcompanyfl.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-c9f4f58f_inspection_2026-11-02T04-44-27-836Z.jpg)

Suggested CSV line: `theroofingcompanyfl.com,approve,yes,,,,`

## hwcontracting.net

| | |
|---|---|
| Website | https://hwcontracting.net/ |
| Search title | HW Contracting and Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://hwcontracting.net/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-ffcc1489_inspection_2026-11-02T04-42-35-667Z.jpg)

Suggested CSV line: `hwcontracting.net,approve,yes,,,,`

## ecoroofandsolar.com

| | |
|---|---|
| Website | https://www.ecoroofandsolar.com/ |
| Search title | Eco Roof and Solar |
| Found by query | osm:craft=roofer |
| Contact page | https://ecoroofandsolar.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-6f642d62_inspection_2026-11-02T04-43-57-319Z.jpg)

Suggested CSV line: `ecoroofandsolar.com,approve,yes,,,,`

## buffaloroofing.com

| | |
|---|---|
| Website | https://www.buffaloroofing.com/ |
| Search title | Buffalo Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.buffaloroofing.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-e5933616_inspection_2026-11-02T04-44-49-084Z.jpg)

Suggested CSV line: `buffaloroofing.com,approve,yes,,,,`

## raycoconstruction.com

| | |
|---|---|
| Website | https://www.raycoconstruction.com/ |
| Search title | Rayco Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://www.raycoconstruction.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-7880fe29_inspection_2026-11-02T04-45-42-104Z.jpg)

Suggested CSV line: `raycoconstruction.com,approve,yes,,,,`

## rooferinct.net

| | |
|---|---|
| Website | https://www.rooferinct.net/ |
| Search title | Roofer in CT |
| Found by query | osm:craft=roofer |
| Contact page | https://www.bartlettcontractingllc.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-853731bb_inspection_2026-11-02T04-37-08-043Z.jpg)

Suggested CSV line: `rooferinct.net,approve,yes,,,,`

## abcoroofingtx.com

| | |
|---|---|
| Website | https://www.abcoroofingtx.com/ |
| Search title | ABCO Roofing & Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://www.abcoroofingtx.com/request-quote |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-7a41ad2a_inspection_2026-11-02T04-37-52-312Z.jpg)

Suggested CSV line: `abcoroofingtx.com,approve,yes,,,,`

## eustisroofing.com

| | |
|---|---|
| Website | https://eustisroofing.com/ |
| Search title | Eustis Roofing Company |
| Found by query | osm:craft=roofer |
| Contact page | https://www.eustisroofing.com/?\_\_cf\_chl\_rt\_tk=GbpGfEc5aVayb9VaL4zlT4bBoApnsMouG3w1BRxdQM8-1793594483-1.0.1.1-2nfh.Wmy4Y.wpG\_6G.B6PoA5Zf6DMe\_zRA4ZjNgjaxk |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-1f76e449_inspection_2026-11-02T04-41-23-827Z.jpg)

Suggested CSV line: `eustisroofing.com,approve,yes,,,,`

## alanisroofing.com

| | |
|---|---|
| Website | https://www.alanisroofing.com/ |
| Search title | Alanis Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website has a broken HTTPS certificate
~~~

Suggested CSV line: `alanisroofing.com,approve,yes,,,,`

## thekingofroofs.com

| | |
|---|---|
| Website | https://www.thekingofroofs.com/ |
| Search title | The King Of Roofs |
| Found by query | osm:craft=roofer |
| Contact page | https://thekingofroofs.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-6466bcc5_inspection_2026-11-02T04-42-13-340Z.jpg)

Suggested CSV line: `thekingofroofs.com,approve,yes,,,,`

## rydellroofing.com

| | |
|---|---|
| Website | https://www.rydellroofing.com/ |
| Search title | Rydell Roofing & Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://www.rydellroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-3c8f10b7_inspection_2026-11-02T04-43-04-299Z.jpg)

Suggested CSV line: `rydellroofing.com,approve,yes,,,,`

## jrcousa.com

| | |
|---|---|
| Website | https://www.jrcousa.com/ |
| Search title | JR & Co. Roofing Contractors |
| Found by query | osm:craft=roofer |
| Contact page | https://jrcousa.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Review: Required dropdown "What Are You Interested In?(Required)" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-7e8d1ccc_inspection_2026-11-02T04-39-17-066Z.jpg)

Suggested CSV line: `jrcousa.com,approve,yes,,,,`

## americanwayexteriors.com

| | |
|---|---|
| Website | https://americanwayexteriors.com/ |
| Search title | American Way Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | https://www.americanwayexteriors.com/get-a-quote/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-83e2f0f4_inspection_2026-11-02T04-39-53-923Z.jpg)

Suggested CSV line: `americanwayexteriors.com,approve,yes,,,,`

## esary.com

| | |
|---|---|
| Website | https://esary.com/ |
| Search title | Esary Roofing & Siding Company Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://esary.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Street Address*": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP / Postal Code*": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-fb748c55_inspection_2026-11-02T04-40-01-116Z.jpg)

Suggested CSV line: `esary.com,approve,yes,,,,`

## sonshineroofing.com

| | |
|---|---|
| Website | https://www.sonshineroofing.com/ |
| Search title | SonShine Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://sonshineroofing.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-44578140_inspection_2026-11-02T04-40-14-917Z.jpg)

Suggested CSV line: `sonshineroofing.com,approve,yes,,,,`

## freedomhomecrafters.com

| | |
|---|---|
| Website | https://freedomhomecrafters.com/ |
| Search title | Freedom Home Crafters |
| Found by query | osm:craft=roofer |
| Contact page | https://freedomhomecrafters.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-0a0c1ee1_inspection_2026-11-02T04-40-50-397Z.jpg)

Suggested CSV line: `freedomhomecrafters.com,approve,yes,,,,`

## mancillaroofing.com

| | |
|---|---|
| Website | https://mancillaroofing.com/ |
| Search title | Mancilla Roofing & Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://mancillaroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-cf139de8_inspection_2026-11-02T04-41-13-664Z.jpg)

Suggested CSV line: `mancillaroofing.com,approve,yes,,,,`

## skyyguard.com

| | |
|---|---|
| Website | https://skyyguard.com/ |
| Search title | Skyyguard |
| Found by query | osm:craft=roofer |
| Contact page | https://skyyguard.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-29e46b59_inspection_2026-11-02T04-42-53-986Z.jpg)

Suggested CSV line: `skyyguard.com,approve,yes,,,,`

## independentroofing.net

| | |
|---|---|
| Website | https://www.independentroofing.net/ |
| Search title | Independent Roofing Co. |
| Found by query | osm:craft=roofer |
| Contact page | https://www.independentroofing.net/service-department/emergency/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
BLOCKED: Form purpose is emergency
Review: Required address field "Address of roof to be repaired *": set sender address in campaign.json to allow this form
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-35101f13_inspection_2026-11-02T04-46-03-561Z.jpg)

Suggested CSV line: `independentroofing.net,approve,yes,,,,`

## ameristarroofingkc.com

| | |
|---|---|
| Website | https://www.ameristarroofingkc.com/ |
| Search title | Ameristar Roofing & Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://www.ameristarroofingkc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-c14a05dd_inspection_2026-11-02T04-43-17-186Z.jpg)

Suggested CSV line: `ameristarroofingkc.com,approve,yes,,,,`

## gutterempirellc.com

| | |
|---|---|
| Website | https://www.gutterempirellc.com/ |
| Search title | Gutter Empire LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://gutterempireportland.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-cd5e73cc_inspection_2026-11-02T04-44-14-743Z.jpg)

Suggested CSV line: `gutterempirellc.com,approve,yes,,,,`

## fitthebillconstruction.com

| | |
|---|---|
| Website | https://fitthebillconstruction.com/ |
| Search title | Fit The Bill Construction LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://fitthebillconstruction.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-db4741c4_inspection_2026-11-02T04-44-21-460Z.jpg)

Suggested CSV line: `fitthebillconstruction.com,approve,yes,,,,`

## martinexteriors.com

| | |
|---|---|
| Website | https://martinexteriors.com/ |
| Search title | Martin Exteriors Roofing & Siding |
| Found by query | osm:craft=roofer |
| Contact page | https://martinexteriors.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Your Address*": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-1caf9844_inspection_2026-11-02T04-42-21-783Z.jpg)

Suggested CSV line: `martinexteriors.com,approve,yes,,,,`

## homesteadroofingcolorado.com

| | |
|---|---|
| Website | https://homesteadroofingcolorado.com/ |
| Search title | Homestead Roofing, Inc |
| Found by query | osm:craft=roofer |
| Contact page | https://www.homesteadroofingcolorado.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-85d9e33a_inspection_2026-11-02T04-44-38-484Z.jpg)

Suggested CSV line: `homesteadroofingcolorado.com,approve,yes,,,,`

## calproroof.com

| | |
|---|---|
| Website | http://www.calproroof.com/ |
| Search title | Calpro Roofing & Solar |
| Found by query | osm:craft=roofer |
| Contact page | https://calpro-roofing.com/\#b5b67d18-f2b1-49bd-b7d4-cab7e6d2a54a |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-f81b741d_inspection_2026-11-02T04-45-17-279Z.jpg)

Suggested CSV line: `calproroof.com,approve,yes,,,,`

## armourroofinc.com

| | |
|---|---|
| Website | http://armourroofinc.com/ |
| Search title | Armour Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://armourroofinc.com/contact.php |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-6e47328c_inspection_2026-11-02T04-45-49-982Z.jpg)

Suggested CSV line: `armourroofinc.com,approve,yes,,,,`

## efficientroofingapachejunction.com

| | |
|---|---|
| Website | https://www.efficientroofingapachejunction.com/ |
| Search title | Efficient Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `efficientroofingapachejunction.com,approve,yes,,,,`

## walkerroofing.com

| | |
|---|---|
| Website | https://www.walkerroofing.com/ |
| Search title | Walker Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.walkerroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-54e87499_inspection_2026-11-02T04-43-24-096Z.jpg)

Suggested CSV line: `walkerroofing.com,approve,yes,,,,`

## eldridgeroofing.com

| | |
|---|---|
| Website | https://www.eldridgeroofing.com/ |
| Search title | Eldridge Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.eldridgeroofing.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-2d7da288_inspection_2026-11-02T04-38-04-215Z.jpg)

Suggested CSV line: `eldridgeroofing.com,approve,yes,,,,`

## metrocityroofing.com

| | |
|---|---|
| Website | https://metrocityroofing.com/ |
| Search title | Metro City Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://metrocityroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-75458de5_inspection_2026-11-02T04-36-55-420Z.jpg)

Suggested CSV line: `metrocityroofing.com,approve,yes,,,,`

## cqroofing.com

| | |
|---|---|
| Website | https://cqroofing.com/ |
| Search title | CQ Roofing Co. |
| Found by query | osm:craft=roofer |
| Contact page | https://cqroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required address field "ADDRESS*": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-a2591c15_inspection_2026-11-02T04-37-18-268Z.jpg)

Suggested CSV line: `cqroofing.com,approve,yes,,,,`

## customdesignroofingllc.com

| | |
|---|---|
| Website | https://www.customdesignroofingllc.com/ |
| Search title | Custom Design Roofing LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://customdesignroofingllc.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "form_fields[field_c579eaa]": set sender lastName in campaign.json to allow this form
Review: Required field "form_fields[field_2c2a201]" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-105e42be_inspection_2026-11-02T04-37-28-047Z.jpg)

Suggested CSV line: `customdesignroofingllc.com,approve,yes,,,,`

## rooftopservicesva.com

| | |
|---|---|
| Website | https://www.rooftopservicesva.com/ |
| Search title | Roof Top Services LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.rooftopservicesva.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP / Postal Code": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-cf745831_inspection_2026-11-02T04-37-37-775Z.jpg)

Suggested CSV line: `rooftopservicesva.com,approve,yes,,,,`

## labclongville.com

| | |
|---|---|
| Website | https://labclongville.com/ |
| Search title | Lakes Area Building Center |
| Found by query | osm:craft=roofer |
| Contact page | https://labclongville.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-36a28366_inspection_2026-11-02T04-38-51-148Z.jpg)

Suggested CSV line: `labclongville.com,approve,yes,,,,`

## raintreeroofinginc.com

| | |
|---|---|
| Website | https://www.raintreeroofinginc.com/ |
| Search title | Raintree Roofing, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `raintreeroofinginc.com,approve,yes,,,,`

## mrrepairroofing.com

| | |
|---|---|
| Website | https://mrrepairroofing.com/ |
| Search title | Mr. Repair Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.mrrepairroofing.com/
~~~

Suggested CSV line: `mrrepairroofing.com,approve,yes,,,,`

## roofcontractorportland.com

| | |
|---|---|
| Website | http://www.roofcontractorportland.com/ |
| Search title | Britling Roof Repair Portland |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `roofcontractorportland.com,approve,yes,,,,`

## level1roofing.com

| | |
|---|---|
| Website | https://level1roofing.com/ |
| Search title | Level 1 Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://level1roofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required field "." is not a standard field
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-eb3a89e3_inspection_2026-11-02T04-40-44-262Z.jpg)

Suggested CSV line: `level1roofing.com,approve,yes,,,,`

## hoffmansroofing.com

| | |
|---|---|
| Website | https://www.hoffmansroofing.com/ |
| Search title | Hoffman's Roofing and Roof Repair |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `hoffmansroofing.com,approve,yes,,,,`

## advantagehomeexteriors.com

| | |
|---|---|
| Website | https://www.advantagehomeexteriors.com/ |
| Search title | Advantage Home Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | https://advantagehomeexteriors.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "LAST NAME *": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-0d218a62_inspection_2026-11-02T04-41-42-046Z.jpg)

Suggested CSV line: `advantagehomeexteriors.com,approve,yes,,,,`

## cardinal-roofing.com

| | |
|---|---|
| Website | https://cardinal-roofing.com/ |
| Search title | Cardinal Roofing Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://cardinal-roofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-a278e01e_inspection_2026-11-02T04-41-56-320Z.jpg)

Suggested CSV line: `cardinal-roofing.com,approve,yes,,,,`

## badgerroofing.com

| | |
|---|---|
| Website | https://badgerroofing.com/ |
| Search title | Badger Roofing Inc |
| Found by query | osm:craft=roofer |
| Contact page | https://badgerroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "your-address": set sender address in campaign.json to allow this form
Review: Required dropdown "your-choice" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-54472cce_inspection_2026-11-02T04-42-04-235Z.jpg)

Suggested CSV line: `badgerroofing.com,approve,yes,,,,`

## roofinginsights.com

| | |
|---|---|
| Website | https://roofinginsights.com/ |
| Search title | Roofing Insights |
| Found by query | osm:craft=roofer |
| Contact page | https://www.roofinginsights.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
No-solicitation text: "ad or comparing contractors, this calculator gives you a clear starting point — no sales calls, no obligations. Simply enter your address, follow a few prompts, and see your"
BLOCKED: CAPTCHA / anti-bot present (recaptcha, turnstile, captcha)
BLOCKED: Website indicates it does not accept solicitation
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-e583a295_inspection_2026-11-02T04-49-34-936Z.jpg)

Suggested CSV line: `roofinginsights.com,approve,yes,,,,`

## shelter-usa.com

| | |
|---|---|
| Website | https://shelter-usa.com/ |
| Search title | Shelter Construction LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://shelter-usa.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-ed58057c_inspection_2026-11-02T04-49-44-176Z.jpg)

Suggested CSV line: `shelter-usa.com,approve,yes,,,,`

## improveitmd.com

| | |
|---|---|
| Website | https://improveitmd.com/ |
| Search title | Capitol Improvements – Roofing & Siding Contractors |
| Found by query | osm:craft=roofer |
| Contact page | https://improveitmd.com/quote |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: No email field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-c257665a_inspection_2026-11-02T04-51-20-790Z.jpg)

Suggested CSV line: `improveitmd.com,approve,yes,,,,`

## jdroofs.com

| | |
|---|---|
| Website | https://jdroofs.com/ |
| Search title | DePietro Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://jdroofs.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-430b8265_inspection_2026-11-02T04-54-25-315Z.jpg)

Suggested CSV line: `jdroofs.com,approve,yes,,,,`

## posigen.com

| | |
|---|---|
| Website | https://www.posigen.com/ |
| Search title | PosiGen Solar |
| Found by query | osm:craft=roofer |
| Contact page | https://posigen.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-0493520d_inspection_2026-11-02T04-51-27-788Z.jpg)

Suggested CSV line: `posigen.com,approve,yes,,,,`

## redcanyonroofing.com

| | |
|---|---|
| Website | https://redcanyonroofing.com/ |
| Search title | Red Canyon Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://redcanyonroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-e83409dc_inspection_2026-11-02T04-51-56-591Z.jpg)

Suggested CSV line: `redcanyonroofing.com,approve,yes,,,,`

## hawaiiroofingpros.com

| | |
|---|---|
| Website | https://www.hawaiiroofingpros.com/ |
| Search title | Maui Roofing Pros |
| Found by query | osm:craft=roofer |
| Contact page | https://www.hawaiiroofingpros.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-9d7a6864_inspection_2026-11-02T04-53-14-176Z.jpg)

Suggested CSV line: `hawaiiroofingpros.com,approve,yes,,,,`

## losgatosroofing.com

| | |
|---|---|
| Website | https://www.losgatosroofing.com/ |
| Search title | Los Gatos Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.losgatosroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-af4a7469_inspection_2026-11-02T04-53-05-183Z.jpg)

Suggested CSV line: `losgatosroofing.com,approve,yes,,,,`

## switametalroofing.com

| | |
|---|---|
| Website | https://switametalroofing.com/ |
| Search title | Swita Metal Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://switametalroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is newsletter
Review: No message field detected
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-5c8d6dce_inspection_2026-11-02T04-51-11-551Z.jpg)

Suggested CSV line: `switametalroofing.com,approve,yes,,,,`

## centimark.com

| | |
|---|---|
| Website | https://www.centimark.com/ |
| Search title | CentiMark |
| Found by query | osm:craft=roofer |
| Contact page | https://www.centimark.com/suppliers |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: Required field "Products*" is not a standard field
Review: Required address field "Your Address*": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code*": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-f24db659_inspection_2026-11-02T04-49-25-178Z.jpg)

Suggested CSV line: `centimark.com,approve,yes,,,,`

## eldridgeroofingtx.com

| | |
|---|---|
| Website | https://eldridgeroofingtx.com/ |
| Search title | Eldridge Roofing & Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://www.theeldridgeway.com/care |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: Required zip field "Address": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-17b6a78c_inspection_2026-11-02T04-52-21-915Z.jpg)

Suggested CSV line: `eldridgeroofingtx.com,approve,yes,,,,`

## artisanroofingct.com

| | |
|---|---|
| Website | https://artisanroofingct.com/ |
| Search title | Artisan Building & Remodeling LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.artisanroofingct.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-38d0b186_inspection_2026-11-02T04-52-53-112Z.jpg)

Suggested CSV line: `artisanroofingct.com,approve,yes,,,,`

## cklewiscontractors.com

| | |
|---|---|
| Website | https://cklewiscontractors.com/ |
| Search title | CK Lewis Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://cklewiscontractors.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-e35266cc_inspection_2026-11-02T04-53-48-743Z.jpg)

Suggested CSV line: `cklewiscontractors.com,approve,yes,,,,`

## dhiroofing.com

| | |
|---|---|
| Website | https://dhiroofing.com/ |
| Search title | DHI Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://dhiroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-2b516e75_inspection_2026-11-02T04-54-04-906Z.jpg)

Suggested CSV line: `dhiroofing.com,approve,yes,,,,`

## yellowhammerroofing.com

| | |
|---|---|
| Website | https://yellowhammerroofing.com/ |
| Search title | Yellowhammer Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://yellowhammerroofing.com/contact.asp |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-d879d516_inspection_2026-11-02T04-54-13-894Z.jpg)

Suggested CSV line: `yellowhammerroofing.com,approve,yes,,,,`

## wilsonandsonsroofing.com

| | |
|---|---|
| Website | https://wilsonandsonsroofing.com/ |
| Search title | Wilson and Sons Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://wilsonandsonsroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-be98ea45_inspection_2026-11-02T04-47-23-044Z.jpg)

Suggested CSV line: `wilsonandsonsroofing.com,approve,yes,,,,`

## harlanroofing.com

| | |
|---|---|
| Website | https://harlanroofing.com/ |
| Search title | Harlan Quality Roofing, Inc |
| Found by query | osm:craft=roofer |
| Contact page | https://harlanroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-71c141ce_inspection_2026-11-02T04-52-31-762Z.jpg)

Suggested CSV line: `harlanroofing.com,approve,yes,,,,`

## doddroofs.com

| | |
|---|---|
| Website | https://www.doddroofs.com/ |
| Search title | Dodd Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.doddroofs.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "address": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-18af3972_inspection_2026-11-02T04-51-48-280Z.jpg)

Suggested CSV line: `doddroofs.com,approve,yes,,,,`

## northfaceconstruction.com

| | |
|---|---|
| Website | https://northfaceconstruction.com/ |
| Search title | Northface Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://northfaceconstruction.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required zip field "Zip Code*": set sender zip in campaign.json to allow this form
Review: Required dropdown "What Service Do You Need?*" has no truthful option
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-5773bf79_inspection_2026-11-02T04-48-37-818Z.jpg)

Suggested CSV line: `northfaceconstruction.com,approve,yes,,,,`

## acsroofingsiding.com

| | |
|---|---|
| Website | https://acsroofingsiding.com/ |
| Search title | Affordable Contracting Services |
| Found by query | osm:craft=roofer |
| Contact page | https://www.acsroofingsiding.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-8df22f20_inspection_2026-11-02T04-50-05-674Z.jpg)

Suggested CSV line: `acsroofingsiding.com,approve,yes,,,,`

## gougequalityroofing.com

| | |
|---|---|
| Website | https://www.gougequalityroofing.com/ |
| Search title | Gouge Quality Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.gougequalityroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-203e3d1e_inspection_2026-11-02T04-46-51-631Z.jpg)

Suggested CSV line: `gougequalityroofing.com,approve,yes,,,,`

## elevateconstructionil.com

| | |
|---|---|
| Website | https://www.elevateconstructionil.com/ |
| Search title | Elevate Construction Inc |
| Found by query | osm:craft=roofer |
| Contact page | https://elevateconstructionil.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required dropdown "dropdown" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-d3ade291_inspection_2026-11-02T04-46-35-980Z.jpg)

Suggested CSV line: `elevateconstructionil.com,approve,yes,,,,`

## marquisroofing.com

| | |
|---|---|
| Website | https://marquisroofing.com/ |
| Search title | Marquis Roofing And Exterior Design |
| Found by query | osm:craft=roofer |
| Contact page | https://marquisroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-8ecada32_inspection_2026-11-02T04-46-21-968Z.jpg)

Suggested CSV line: `marquisroofing.com,approve,yes,,,,`

## assurancecontractors.com

| | |
|---|---|
| Website | https://assurancecontractors.com/ |
| Search title | Assurance Contractors |
| Found by query | osm:craft=roofer |
| Contact page | https://assurancecontractors.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-a43bcade_inspection_2026-11-02T04-53-33-284Z.jpg)

Suggested CSV line: `assurancecontractors.com,approve,yes,,,,`

## sarcinc.com

| | |
|---|---|
| Website | https://www.sarcinc.com/ |
| Search title | Salvo Architectural Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://salvoarchitecturalroofingcontractors.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required field "Service Location" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-34abd024_inspection_2026-11-02T04-53-23-958Z.jpg)

Suggested CSV line: `sarcinc.com,approve,yes,,,,`

## highestroofing.com

| | |
|---|---|
| Website | https://www.highestroofing.com/ |
| Search title | Highest Roofing, LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.highestroofing.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required dropdown "Project Type" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-2a5a3527_inspection_2026-11-02T04-50-17-325Z.jpg)

Suggested CSV line: `highestroofing.com,approve,yes,,,,`

## putnamexteriors.com

| | |
|---|---|
| Website | https://putnamexteriors.com/ |
| Search title | Putnam Exteriors LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.putnamexteriors.com/request-a-quote |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-ba7e9301_inspection_2026-11-02T04-47-00-488Z.jpg)

Suggested CSV line: `putnamexteriors.com,approve,yes,,,,`

## roofprosoftexas.net

| | |
|---|---|
| Website | https://www.roofprosoftexas.net/ |
| Search title | Roof Pros of Texas |
| Found by query | osm:craft=roofer |
| Contact page | https://www.roofprosoftexas.net/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-d24c3832_inspection_2026-11-02T04-48-30-146Z.jpg)

Suggested CSV line: `roofprosoftexas.net,approve,yes,,,,`

## metropropertyservices.com

| | |
|---|---|
| Website | https://www.metropropertyservices.com/ |
| Search title | Metro Property Services |
| Found by query | osm:craft=roofer |
| Contact page | https://www.metropropertyservices.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-73c83593_inspection_2026-11-02T04-52-02-967Z.jpg)

Suggested CSV line: `metropropertyservices.com,approve,yes,,,,`

## carsaconstruction.com

| | |
|---|---|
| Website | https://carsaconstruction.com/ |
| Search title | Carsa Construction & Roofing LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://carsaconstruction.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No message field detected
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-7b39d402_inspection_2026-11-02T04-47-31-326Z.jpg)

Suggested CSV line: `carsaconstruction.com,approve,yes,,,,`

## blueladderroofingindy.com

| | |
|---|---|
| Website | https://www.blueladderroofingindy.com/ |
| Search title | Blue Ladder Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: Timeout 30000ms exceeded.
~~~

Suggested CSV line: `blueladderroofingindy.com,approve,yes,,,,`

## colonyroofers.com

| | |
|---|---|
| Website | https://www.colonyroofers.com/ |
| Search title | Colony Roofers |
| Found by query | osm:craft=roofer |
| Contact page | https://colonyroofers.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last name*": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-dfd0b8aa_inspection_2026-11-02T04-49-00-086Z.jpg)

Suggested CSV line: `colonyroofers.com,approve,yes,,,,`

## redwoodempireroofing.com

| | |
|---|---|
| Website | https://redwoodempireroofing.com/ |
| Search title | Redwood Empire Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.redwoodempireroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-54d12819_inspection_2026-11-02T04-49-56-666Z.jpg)

Suggested CSV line: `redwoodempireroofing.com,approve,yes,,,,`

## jahnsroofing.com

| | |
|---|---|
| Website | https://jahnsroofing.com/ |
| Search title | Bob Jahn's Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://jahnsroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-fa91ad90_inspection_2026-11-02T04-47-15-467Z.jpg)

Suggested CSV line: `jahnsroofing.com,approve,yes,,,,`

## terrehauteroofingcompany.com

| | |
|---|---|
| Website | https://www.terrehauteroofingcompany.com/ |
| Search title | Poplar Roofing & Construction LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.terrehauteroofingcompany.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-765f04bf_inspection_2026-11-02T04-46-45-294Z.jpg)

Suggested CSV line: `terrehauteroofingcompany.com,approve,yes,,,,`

## 1choiceroof.com

| | |
|---|---|
| Website | https://1choiceroof.com/ |
| Search title | 1st Choice Roofing and Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://1choiceroof.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-f2801f93_inspection_2026-11-02T04-50-23-488Z.jpg)

Suggested CSV line: `1choiceroof.com,approve,yes,,,,`

## nwmartin.com

| | |
|---|---|
| Website | https://nwmartin.com/ |
| Search title | N. W. Martin & Brothers, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://www.nwmartinroof.com/contacts |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-ae190f4f_inspection_2026-11-02T04-50-37-667Z.jpg)

Suggested CSV line: `nwmartin.com,approve,yes,,,,`

## beemerkangaroof.com

| | |
|---|---|
| Website | https://beemerkangaroof.com/ |
| Search title | Beemer Kangaroof |
| Found by query | osm:craft=roofer |
| Contact page | https://www.beemerkangaroof.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-bb5b68b3_inspection_2026-11-02T04-51-01-157Z.jpg)

Suggested CSV line: `beemerkangaroof.com,approve,yes,,,,`

## friendlyrestorationservice.com

| | |
|---|---|
| Website | https://www.friendlyrestorationservice.com/ |
| Search title | Friendly Restoration Services |
| Found by query | osm:craft=roofer |
| Contact page | https://www.friendlyrestorationservice.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No email field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-5731b88e_inspection_2026-11-02T04-48-47-049Z.jpg)

Suggested CSV line: `friendlyrestorationservice.com,approve,yes,,,,`

## getflatroofing.com

| | |
|---|---|
| Website | https://getflatroofing.com/ |
| Search title | Flat Roof Solutions |
| Found by query | osm:craft=roofer |
| Contact page | https://getflatroofing.com/contact/request-a-commercial-quote/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-3306060d_inspection_2026-11-02T04-53-55-557Z.jpg)

Suggested CSV line: `getflatroofing.com,approve,yes,,,,`

## roofingformula.com

| | |
|---|---|
| Website | https://www.roofingformula.com/ |
| Search title | Roofing Formula LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.roofingformula.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "dropdown" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-80354e2a_inspection_2026-11-02T04-53-40-220Z.jpg)

Suggested CSV line: `roofingformula.com,approve,yes,,,,`

## falconexteriors.com

| | |
|---|---|
| Website | https://www.falconexteriors.com/ |
| Search title | Falcon Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | https://falconhomesinc.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-a1d73e8a_inspection_2026-11-02T04-52-14-145Z.jpg)

Suggested CSV line: `falconexteriors.com,approve,yes,,,,`

## klausroofingcolorado.com

| | |
|---|---|
| Website | https://klausroofingcolorado.com/ |
| Search title | Klaus Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://klausroofingcolorado.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required choice (Roof Replacement / Insurance Claim / Photo Inspection / Roof Repair) has no truthful option
Review: Required choice (One Story / Two Stories / Three Stories or More) has no truthful option
Review: Required choice (Within 1-3 Months / Within 3-6 Months / Within 6-12 Months) has no truthful option
Review: Required choice (Property Owner / Real Estate Agent / Project Manager) has no truthful option
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Address Line 1": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "Zip Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-c640926d_inspection_2026-11-02T04-51-37-183Z.jpg)

Suggested CSV line: `klausroofingcolorado.com,approve,yes,,,,`

## mars-roofing.com

| | |
|---|---|
| Website | https://mars-roofing.com/ |
| Search title | Mars Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://mars-roofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-85c74ba2_inspection_2026-11-02T04-59-49-026Z.jpg)

Suggested CSV line: `mars-roofing.com,approve,yes,,,,`

## styleroofing.com

| | |
|---|---|
| Website | https://www.styleroofing.com/ |
| Search title | Style Roofing Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://www.styleroofing.com/free-estimate/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Review: Required address field "address": set sender address in campaign.json to allow this form
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-92c64bb9_inspection_2026-11-02T04-56-11-142Z.jpg)

Suggested CSV line: `styleroofing.com,approve,yes,,,,`

## kanddroofingnc.com

| | |
|---|---|
| Website | https://kanddroofingnc.com/ |
| Search title | K&D Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://kanddroofingnc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-7aaae3c2_inspection_2026-11-02T04-56-51-383Z.jpg)

Suggested CSV line: `kanddroofingnc.com,approve,yes,,,,`

## securedroofingandrestoration.com

| | |
|---|---|
| Website | https://securedroofingandrestoration.com/ |
| Search title | Secured Roofing & Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://securedroofingandrestoration.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "STREET ADDRESS": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP CODE": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-9e247b5f_inspection_2026-11-02T05-02-09-533Z.jpg)

Suggested CSV line: `securedroofingandrestoration.com,approve,yes,,,,`

## mendroofing.com

| | |
|---|---|
| Website | https://mendroofing.com/ |
| Search title | Mend Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.mendroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-6461e452_inspection_2026-11-02T04-55-17-865Z.jpg)

Suggested CSV line: `mendroofing.com,approve,yes,,,,`

## getsci.net

| | |
|---|---|
| Website | https://www.getsci.net/ |
| Search title | S.C.I. Roofing & Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://getsci.net/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-0beb5ba4_inspection_2026-11-02T04-56-02-030Z.jpg)

Suggested CSV line: `getsci.net,approve,yes,,,,`

## combsconstructionok.com

| | |
|---|---|
| Website | https://combsconstructionok.com/ |
| Search title | Combs Construction, Roofing & Siding |
| Found by query | osm:craft=roofer |
| Contact page | https://yamatotateru.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-964df7ad_inspection_2026-11-02T04-56-24-848Z.jpg)

Suggested CSV line: `combsconstructionok.com,approve,yes,,,,`

## steelcityroofing.com

| | |
|---|---|
| Website | https://steelcityroofing.com/ |
| Search title | Steel City Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.steelcityroofing.com/
~~~

Suggested CSV line: `steelcityroofing.com,approve,yes,,,,`

## orr-roofing.com

| | |
|---|---|
| Website | https://orr-roofing.com/ |
| Search title | Orr Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://orr-roofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-0b12221d_inspection_2026-11-02T04-56-57-407Z.jpg)

Suggested CSV line: `orr-roofing.com,approve,yes,,,,`

## pinnacleroofingassociates.com

| | |
|---|---|
| Website | https://pinnacleroofingassociates.com/ |
| Search title | Pinnacle Roofing Associates LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://pinnacleroofingassociates.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-81e14117_inspection_2026-11-02T04-57-31-366Z.jpg)

Suggested CSV line: `pinnacleroofingassociates.com,approve,yes,,,,`

## preferredcontractorsllc.com

| | |
|---|---|
| Website | https://www.preferredcontractorsllc.com/ |
| Search title | Preferred Contractors LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://preferredroofing.org/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-ae14f6f1_inspection_2026-11-02T04-57-57-447Z.jpg)

Suggested CSV line: `preferredcontractorsllc.com,approve,yes,,,,`

## oliverbrothersroofing.com

| | |
|---|---|
| Website | https://oliverbrothersroofing.com/ |
| Search title | Oliver Brothers Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://oliverbrothersroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-514da0b0_inspection_2026-11-02T04-58-04-151Z.jpg)

Suggested CSV line: `oliverbrothersroofing.com,approve,yes,,,,`

## nathanbeancontractingllc.com

| | |
|---|---|
| Website | https://nathanbeancontractingllc.com/ |
| Search title | Nathan Bean Contracting LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://nathanbeancontractingllc.com/?\_\_cf\_chl\_rt\_tk=1Al2gKi3rIvO0L\_DJ0SkesMlwuC5Z1VT63rAnhIrtPg-1793595490-1.0.1.1-Pv5jVwnYDy3n5a2IMB\_Jhf1G.vZpgteLn3jv2TuA350 |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-ab83dd8a_inspection_2026-11-02T04-58-10-923Z.jpg)

Suggested CSV line: `nathanbeancontractingllc.com,approve,yes,,,,`

## aaametalworks.com

| | |
|---|---|
| Website | https://aaametalworks.com/ |
| Search title | AAA Metal Works |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: Navigation to "https://www.aaametalworks.com/" is interrupted by another navigation to "chrome-error://chromewebdata/"
~~~

Suggested CSV line: `aaametalworks.com,approve,yes,,,,`

## inspiredhomebuilders.com

| | |
|---|---|
| Website | https://inspiredhomebuilders.com/ |
| Search title | Inspired Home Builders LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.inspiredhomebuilders.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "last-name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-f3f8b949_inspection_2026-11-02T04-58-28-009Z.jpg)

Suggested CSV line: `inspiredhomebuilders.com,approve,yes,,,,`

## omegacleanupandroofing.com

| | |
|---|---|
| Website | https://omegacleanupandroofing.com/ |
| Search title | Omega Disaster Cleanup and Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://omegacleanupandroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-197c4cf5_inspection_2026-11-02T04-58-36-915Z.jpg)

Suggested CSV line: `omegacleanupandroofing.com,approve,yes,,,,`

## cfmcfaddenjrllc.com

| | |
|---|---|
| Website | http://cfmcfaddenjrllc.com/ |
| Search title | C. F. McFadden Jr. LLC |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `cfmcfaddenjrllc.com,approve,yes,,,,`

## roofingcolorado.com

| | |
|---|---|
| Website | https://roofingcolorado.com/ |
| Search title | Colorado's Best Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://roofingcolorado.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-29c72516_inspection_2026-11-02T05-00-13-314Z.jpg)

Suggested CSV line: `roofingcolorado.com,approve,yes,,,,`

## customexteriorsllc.com

| | |
|---|---|
| Website | https://www.customexteriorsllc.com/ |
| Search title | Custom Exteriors LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://customexteriorsllc.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-a1f213ca_inspection_2026-11-02T05-00-38-958Z.jpg)

Suggested CSV line: `customexteriorsllc.com,approve,yes,,,,`

## roofingchinohills.com

| | |
|---|---|
| Website | https://roofingchinohills.com/ |
| Search title | Chino Hills Roofing Pros |
| Found by query | osm:craft=roofer |
| Contact page | https://roofingchinohills.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-d8c40bc6_inspection_2026-11-02T05-00-54-163Z.jpg)

Suggested CSV line: `roofingchinohills.com,approve,yes,,,,`

## fortressroofingutah.com

| | |
|---|---|
| Website | https://www.fortressroofingutah.com/ |
| Search title | Fortress Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://fortressroofingutah.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-d72a0b47_inspection_2026-11-02T05-01-49-951Z.jpg)

Suggested CSV line: `fortressroofingutah.com,approve,yes,,,,`

## gregsroofingkapaa.com

| | |
|---|---|
| Website | https://gregsroofingkapaa.com/ |
| Search title | Greg's Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.gregsroofingkapaa.com/contactus.htm |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-637c9f90_inspection_2026-11-02T05-02-00-236Z.jpg)

Suggested CSV line: `gregsroofingkapaa.com,approve,yes,,,,`

## tbareroofing.com

| | |
|---|---|
| Website | https://tbareroofing.com/ |
| Search title | T Bare Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://tbareroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-f668cd26_inspection_2026-11-02T05-02-40-379Z.jpg)

Suggested CSV line: `tbareroofing.com,approve,yes,,,,`

## dmcustomsohio.com

| | |
|---|---|
| Website | https://dmcustomsohio.com/ |
| Search title | DM Roofing Siding & Windows |
| Found by query | osm:craft=roofer |
| Contact page | https://dmcustomsohio.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-4f409d36_inspection_2026-11-02T04-54-36-071Z.jpg)

Suggested CSV line: `dmcustomsohio.com,approve,yes,,,,`

## pioneermetalroofing.com

| | |
|---|---|
| Website | https://pioneermetalroofing.com/ |
| Search title | Pioneer Metal Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://pioneermetalroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
BLOCKED: Form purpose is job application
Review: Required dropdown "Best Time to Contact *" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-864c99ff_inspection_2026-11-02T04-54-55-824Z.jpg)

Suggested CSV line: `pioneermetalroofing.com,approve,yes,,,,`

## rtroofing.com

| | |
|---|---|
| Website | https://rtroofing.com/ |
| Search title | RT Roofing Specialist Inc |
| Found by query | osm:craft=roofer |
| Contact page | https://rtroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-a49358df_inspection_2026-11-02T04-55-04-444Z.jpg)

Suggested CSV line: `rtroofing.com,approve,yes,,,,`

## roofdesignnaples.com

| | |
|---|---|
| Website | https://roofdesignnaples.com/ |
| Search title | Roof Design & Sheet Metal, LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://roofdesignnaples.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-5714729f_inspection_2026-11-02T04-55-29-066Z.jpg)

Suggested CSV line: `roofdesignnaples.com,approve,yes,,,,`

## aspenroofs.com

| | |
|---|---|
| Website | https://aspenroofs.com/ |
| Search title | Aspen Roofing Inc |
| Found by query | osm:craft=roofer |
| Contact page | https://aspenroofs.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-e0f81d1f_inspection_2026-11-02T04-57-05-177Z.jpg)

Suggested CSV line: `aspenroofs.com,approve,yes,,,,`

## jayspainroofing.com

| | |
|---|---|
| Website | https://jayspainroofing.com/ |
| Search title | Jay Spain Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.jayspainroofing.com/contactus.htm |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-d3510e9f_inspection_2026-11-02T04-58-46-968Z.jpg)

Suggested CSV line: `jayspainroofing.com,approve,yes,,,,`

## poeroofingandconsultinginc.com

| | |
|---|---|
| Website | https://poeroofingandconsultinginc.com/ |
| Search title | Poe Roofing and Consulting Inc. |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `poeroofingandconsultinginc.com,approve,yes,,,,`

## twinpeaksroofing.net

| | |
|---|---|
| Website | http://twinpeaksroofing.net/ |
| Search title | Twin Peaks Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: robots.txt disallows automated access to the site
~~~

Suggested CSV line: `twinpeaksroofing.net,approve,yes,,,,`

## communityroofingandrestoration.com

| | |
|---|---|
| Website | https://www.communityroofingandrestoration.com/ |
| Search title | Community Roofing & Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://www.communityroofingandrestoration.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-bf46f67f_inspection_2026-11-02T04-59-27-892Z.jpg)

Suggested CSV line: `communityroofingandrestoration.com,approve,yes,,,,`

## commercialroofingsolutionsco.com

| | |
|---|---|
| Website | https://commercialroofingsolutionsco.com/ |
| Search title | Commercial Roofing Solutions |
| Found by query | osm:craft=roofer |
| Contact page | https://commercialroofingsolutionsco.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-1747d9fd_inspection_2026-11-02T04-59-34-953Z.jpg)

Suggested CSV line: `commercialroofingsolutionsco.com,approve,yes,,,,`

## prateroofing.com

| | |
|---|---|
| Website | https://prateroofing.com/ |
| Search title | Prate Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://prateroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-8b511e9a_inspection_2026-11-02T05-00-06-919Z.jpg)

Suggested CSV line: `prateroofing.com,approve,yes,,,,`

## oysterbayroofing.com

| | |
|---|---|
| Website | https://oysterbayroofing.com/ |
| Search title | Oyster Bay Roofing & Sheet Metal Inc. |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.oysterbayroofing.com/
~~~

Suggested CSV line: `oysterbayroofing.com,approve,yes,,,,`

## calpac.com

| | |
|---|---|
| Website | https://www.calpac.com/ |
| Search title | Cal-Pac Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.calpac.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "Street Address *": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-577b3a24_inspection_2026-11-02T05-01-09-854Z.jpg)

Suggested CSV line: `calpac.com,approve,yes,,,,`

## duro-last.com

| | |
|---|---|
| Website | https://duro-last.com/ |
| Search title | Duro-Last |
| Found by query | osm:craft=roofer |
| Contact page | https://duro-last.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name(Required)": set sender lastName in campaign.json to allow this form
Review: Required zip field "Project ZIP / Postal Code(Required)": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-3bf39d33_inspection_2026-11-02T05-02-30-311Z.jpg)

Suggested CSV line: `duro-last.com,approve,yes,,,,`

## advanceexteriorsolutions.com

| | |
|---|---|
| Website | https://advanceexteriorsolutions.com/ |
| Search title | Advance Exterior Solutions |
| Found by query | osm:craft=roofer |
| Contact page | https://advanceexteriorsolutions.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required zip field "Zip Code(Required)": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-9987149c_inspection_2026-11-02T04-56-39-433Z.jpg)

Suggested CSV line: `advanceexteriorsolutions.com,approve,yes,,,,`

## mulberry-builders.com

| | |
|---|---|
| Website | https://www.mulberry-builders.com/ |
| Search title | Mulberry Builders |
| Found by query | osm:craft=roofer |
| Contact page | https://www.mulberry-builders.com/contactuscontractor/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-4a6eddd4_inspection_2026-11-02T04-57-20-933Z.jpg)

Suggested CSV line: `mulberry-builders.com,approve,yes,,,,`

## wisadc.com

| | |
|---|---|
| Website | https://wisadc.com/ |
| Search title | WISA Solutions |
| Found by query | osm:craft=roofer |
| Contact page | https://wisadc.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: Required zip field "Zip": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-c1a711b6_inspection_2026-11-02T04-55-47-925Z.jpg)

Suggested CSV line: `wisadc.com,approve,yes,,,,`

## redfoxconstructionandmasonry.com

| | |
|---|---|
| Website | https://redfoxconstructionandmasonry.com/ |
| Search title | Red Fox Construction & Masonry Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://redfoxconstructionandmasonry.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-d3e6dd8e_inspection_2026-11-02T04-59-06-829Z.jpg)

Suggested CSV line: `redfoxconstructionandmasonry.com,approve,yes,,,,`

## westpalmbeachprogeneralcontractors.com

| | |
|---|---|
| Website | https://westpalmbeachprogeneralcontractors.com/ |
| Search title | West Palm Beach Pro General Contractors |
| Found by query | osm:craft=roofer |
| Contact page | https://westpalmbeachprogeneralcontractors.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-38e1eb24_inspection_2026-11-02T04-59-19-634Z.jpg)

Suggested CSV line: `westpalmbeachprogeneralcontractors.com,approve,yes,,,,`

## wooleybrothers.com

| | |
|---|---|
| Website | https://www.wooleybrothers.com/ |
| Search title | Wooley Brothers Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.wooleybrothers.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, turnstile)
Review: Required last name field "Last name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Choose a topic" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-364fe26b_inspection_2026-11-02T05-00-25-599Z.jpg)

Suggested CSV line: `wooleybrothers.com,approve,yes,,,,`

## sjroof.com

| | |
|---|---|
| Website | https://www.sjroof.com/ |
| Search title | Saint Joseph's Roofing, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://sjroof.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Review: Required address field "Street *": set sender address in campaign.json to allow this form
Review: Required zip field "Zip *": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-a45cdf39_inspection_2026-11-02T05-01-28-302Z.jpg)

Suggested CSV line: `sjroof.com,approve,yes,,,,`

## abovetheskyroofing.com

| | |
|---|---|
| Website | https://abovetheskyroofing.com/ |
| Search title | Above The Sky Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `abovetheskyroofing.com,approve,yes,,,,`

## brogdonroofing.com

| | |
|---|---|
| Website | https://brogdonroofing.com/ |
| Search title | Brogdon Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://brogdonroofinginc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-8446efb3_inspection_2026-11-02T05-03-21-833Z.jpg)

Suggested CSV line: `brogdonroofing.com,approve,yes,,,,`

## cornettroofing.com

| | |
|---|---|
| Website | https://cornettroofing.com/ |
| Search title | Cornett Roofing Systems |
| Found by query | osm:craft=roofer |
| Contact page | https://cornettroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-82a7708f_inspection_2026-11-02T05-03-13-377Z.jpg)

Suggested CSV line: `cornettroofing.com,approve,yes,,,,`

## kguardrockymountains.com

| | |
|---|---|
| Website | https://kguardrockymountains.com/ |
| Search title | K-Guard Gutters Rocky Mountains |
| Found by query | osm:craft=roofer |
| Contact page | https://kguardrockymountains.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-d0c4c88a_inspection_2026-11-02T05-03-28-256Z.jpg)

Suggested CSV line: `kguardrockymountains.com,approve,yes,,,,`

## redemptionroofing.com

| | |
|---|---|
| Website | https://www.redemptionroofing.com/ |
| Search title | Redemption Roofing and General Contracting |
| Found by query | osm:craft=roofer |
| Contact page | https://redemptionroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Address*": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-84946e7e_inspection_2026-11-02T05-03-54-080Z.jpg)

Suggested CSV line: `redemptionroofing.com,approve,yes,,,,`

## americanqualityroofing.com

| | |
|---|---|
| Website | https://americanqualityroofing.com/ |
| Search title | American Quality Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `americanqualityroofing.com,approve,yes,,,,`

## versatileroofing.net

| | |
|---|---|
| Website | https://versatileroofing.net/ |
| Search title | Versatile Roofing Systems |
| Found by query | osm:craft=roofer |
| Contact page | https://versatileroofing.net/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/1ff8c52e-d9c9-4a02-a4b8-5e68651655d3/run-1ff8c52e_candidate-7ef94496_inspection_2026-11-02T05-04-04-977Z.jpg)

Suggested CSV line: `versatileroofing.net,approve,yes,,,,`

## handymanroofing.com

| | |
|---|---|
| Website | https://handymanroofing.com/ |
| Search title | Handyman Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://handymanroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-b291a53a_inspection_2026-11-02T05-20-57-430Z.jpg)

Suggested CSV line: `handymanroofing.com,approve,yes,,,,`

## pinnacleroofinggroup.com

| | |
|---|---|
| Website | https://pinnacleroofinggroup.com/ |
| Search title | Pinnacle Roofing Group |
| Found by query | osm:craft=roofer |
| Contact page | https://pinnacleroofinggroup.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last name *": set sender lastName in campaign.json to allow this form
Review: Required address field "Street address *": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code *": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-c1b379ee_inspection_2026-11-02T05-18-27-801Z.jpg)

Suggested CSV line: `pinnacleroofinggroup.com,approve,yes,,,,`

## zezeeroofingco.com

| | |
|---|---|
| Website | https://zezeeroofingco.com/ |
| Search title | Zezee Roofing Co. |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `zezeeroofingco.com,approve,yes,,,,`

## protechroofingnj.com

| | |
|---|---|
| Website | https://protechroofingnj.com/ |
| Search title | ProTech Roofing & Exterior |
| Found by query | osm:craft=roofer |
| Contact page | https://protechroofingnj.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Review: Required zip field "ZIP code": set sender zip in campaign.json to allow this form
Review: Required dropdown "What do you need?" has no truthful option
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-372af608_inspection_2026-11-02T05-16-20-496Z.jpg)

Suggested CSV line: `protechroofingnj.com,approve,yes,,,,`

## pacificocontracting.com

| | |
|---|---|
| Website | https://pacificocontracting.com/ |
| Search title | Pacifico Contracting and Home Improvement |
| Found by query | osm:craft=roofer |
| Contact page | https://pacificocontracting.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Street*
required": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code*
required": set sender zip in campaign.json to allow this form
Review: Required checkbox "Yes" needs a reviewed value
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-8e8bbe67_inspection_2026-11-02T05-15-41-477Z.jpg)

Suggested CSV line: `pacificocontracting.com,approve,yes,,,,`

## kingsroofingcompany.com

| | |
|---|---|
| Website | https://kingsroofingcompany.com/ |
| Search title | Kings Roofing Company |
| Found by query | osm:craft=roofer |
| Contact page | https://kingsroofingcompany.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-53fb87f4_inspection_2026-11-02T05-14-31-634Z.jpg)

Suggested CSV line: `kingsroofingcompany.com,approve,yes,,,,`

## elitesidingroofing.com

| | |
|---|---|
| Website | https://elitesidingroofing.com/ |
| Search title | Elite Siding and Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH at https://elitesidingroofing.com/
~~~

Suggested CSV line: `elitesidingroofing.com,approve,yes,,,,`

## orianroofingmia.com

| | |
|---|---|
| Website | https://orianroofingmia.com/ |
| Search title | Orian Roofing And Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://orianroofingmia.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-d65744db_inspection_2026-11-02T05-14-08-204Z.jpg)

Suggested CSV line: `orianroofingmia.com,approve,yes,,,,`

## roofmaxxofbloomington.com

| | |
|---|---|
| Website | https://roofmaxxofbloomington.com/ |
| Search title | Roof Maxx of Bloomington |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `roofmaxxofbloomington.com,approve,yes,,,,`

## getsmartseal.com

| | |
|---|---|
| Website | https://getsmartseal.com/ |
| Search title | SmartSeal, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://getsmartseal.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No message field detected
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-c3ec830a_inspection_2026-11-02T05-13-50-005Z.jpg)

Suggested CSV line: `getsmartseal.com,approve,yes,,,,`

## tiddsroofing.com

| | |
|---|---|
| Website | https://tiddsroofing.com/ |
| Search title | Tidds Roofing Group, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://tiddsroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-f69207f7_inspection_2026-11-02T05-21-15-309Z.jpg)

Suggested CSV line: `tiddsroofing.com,approve,yes,,,,`

## eaglernr.com

| | |
|---|---|
| Website | https://eaglernr.com/ |
| Search title | Eagle Roofing & Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://eaglernr.com/lander |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-5975aca0_inspection_2026-11-02T05-15-31-404Z.jpg)

Suggested CSV line: `eaglernr.com,approve,yes,,,,`

## resultsroofing.com

| | |
|---|---|
| Website | https://resultsroofing.com/ |
| Search title | Results Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://resultsroofing.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-429e3c9b_inspection_2026-11-02T05-17-41-844Z.jpg)

Suggested CSV line: `resultsroofing.com,approve,yes,,,,`

## odonnellroofingco.com

| | |
|---|---|
| Website | https://odonnellroofingco.com/ |
| Search title | O'Donnell Roofing Co. |
| Found by query | osm:craft=roofer |
| Contact page | https://odonnellroofingco.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-f25f7b15_inspection_2026-11-02T05-19-28-146Z.jpg)

Suggested CSV line: `odonnellroofingco.com,approve,yes,,,,`

## qualitybuiltexteriors.com

| | |
|---|---|
| Website | https://qualitybuiltexteriors.com/ |
| Search title | Quality Built Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | https://qualitybuiltexteriors.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-403e8e13_inspection_2026-11-02T05-19-35-824Z.jpg)

Suggested CSV line: `qualitybuiltexteriors.com,approve,yes,,,,`

## avenueroofing.com

| | |
|---|---|
| Website | https://avenueroofing.com/ |
| Search title | Avenue Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://avenueroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-01f98e7c_inspection_2026-11-02T05-20-48-390Z.jpg)

Suggested CSV line: `avenueroofing.com,approve,yes,,,,`

## montanaroofingsolutions.com

| | |
|---|---|
| Website | https://montanaroofingsolutions.com/ |
| Search title | Montana Roofing Solutions |
| Found by query | osm:craft=roofer |
| Contact page | https://montanaroofingsolutions.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-acc71d62_inspection_2026-11-02T05-14-37-968Z.jpg)

Suggested CSV line: `montanaroofingsolutions.com,approve,yes,,,,`

## stormwallroofing.com

| | |
|---|---|
| Website | https://stormwallroofing.com/ |
| Search title | Stormwall Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `stormwallroofing.com,approve,yes,,,,`

## kevinsterwaldroofing.com

| | |
|---|---|
| Website | https://kevinsterwaldroofing.com/ |
| Search title | Kevin Sterwald Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://kevinsterwaldroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-d1dd31e2_inspection_2026-11-02T05-15-13-915Z.jpg)

Suggested CSV line: `kevinsterwaldroofing.com,approve,yes,,,,`

## azroofingsystems.com

| | |
|---|---|
| Website | https://www.azroofingsystems.com/ |
| Search title | Arizona Roofing Systems |
| Found by query | osm:craft=roofer |
| Contact page | https://www.azroofingsystems.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-5011b18d_inspection_2026-11-02T05-16-00-967Z.jpg)

Suggested CSV line: `azroofingsystems.com,approve,yes,,,,`

## rainstoppersroofing.com

| | |
|---|---|
| Website | https://rainstoppersroofing.com/ |
| Search title | Rainstoppers Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://rainstoppersroofing.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "book_location": set sender address in campaign.json to allow this form
Review: Required field "book_time" is not a standard field
Review: Required field "book_date" is not a standard field
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-03784675_inspection_2026-11-02T05-16-35-774Z.jpg)

Suggested CSV line: `rainstoppersroofing.com,approve,yes,,,,`

## advantageremodelingandroofing.com

| | |
|---|---|
| Website | https://advantageremodelingandroofing.com/ |
| Search title | Advantage Remodeling and Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.advantageremodelingandroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-acf5ba0a_inspection_2026-11-02T05-16-46-776Z.jpg)

Suggested CSV line: `advantageremodelingandroofing.com,approve,yes,,,,`

## hydro-pride.com

| | |
|---|---|
| Website | https://hydro-pride.com/ |
| Search title | Hydro Pride |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `hydro-pride.com,approve,yes,,,,`

## jlcroofingaz.com

| | |
|---|---|
| Website | https://jlcroofingaz.com/ |
| Search title | JLC Roofing Inc |
| Found by query | osm:craft=roofer |
| Contact page | https://jlcroofingaz.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required last name field "Last Name*(Required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-e46118c6_inspection_2026-11-02T05-17-29-561Z.jpg)

Suggested CSV line: `jlcroofingaz.com,approve,yes,,,,`

## jkjohnsroofing.com

| | |
|---|---|
| Website | https://jkjohnsroofing.com/ |
| Search title | JK Johns Roofing & Sheet Metal |
| Found by query | osm:craft=roofer |
| Contact page | https://jkjohnsroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-17b240f9_inspection_2026-11-02T05-18-10-716Z.jpg)

Suggested CSV line: `jkjohnsroofing.com,approve,yes,,,,`

## horchroofing.com

| | |
|---|---|
| Website | https://horchroofing.com/ |
| Search title | Horch Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://horchroofing.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Property Address": set sender address in campaign.json to allow this form
Review: Required dropdown "How did you hear about Horch Roofing?*

—Please choose an option—
Radio
Referral
Television
Yard Signs
Trucks
Google / Online
Print Media (Flyers / Newspapers)
Social Media" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-8d988ff4_inspection_2026-11-02T05-18-44-843Z.jpg)

Suggested CSV line: `horchroofing.com,approve,yes,,,,`

## buckworthroofing.com

| | |
|---|---|
| Website | https://buckworthroofing.com/ |
| Search title | Buckworth Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://buckworthroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required dropdown "Select a service*" has no truthful option
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-3d9a84af_inspection_2026-11-02T05-21-06-052Z.jpg)

Suggested CSV line: `buckworthroofing.com,approve,yes,,,,`

## asroofingllcwa.com

| | |
|---|---|
| Website | https://asroofingllcwa.com/ |
| Search title | A & S Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.asroofingllcwa.com/contactus.htm |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-425a46b1_inspection_2026-11-02T05-19-13-362Z.jpg)

Suggested CSV line: `asroofingllcwa.com,approve,yes,,,,`

## palladiumroofing.com

| | |
|---|---|
| Website | https://palladiumroofing.com/ |
| Search title | Palladium Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://palladiumroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required dropdown "Which best describes you?(Required)" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-27cab519_inspection_2026-11-02T05-19-21-681Z.jpg)

Suggested CSV line: `palladiumroofing.com,approve,yes,,,,`

## nulookhomedesign.com

| | |
|---|---|
| Website | https://nulookhomedesign.com/ |
| Search title | Nu Look Roofing, Siding, and Windows |
| Found by query | osm:craft=roofer |
| Contact page | https://nulookhomedesign.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Result was a deep page; homepage will be inspected.
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-6f28b05c_inspection_2026-11-02T05-20-40-049Z.jpg)

Suggested CSV line: `nulookhomedesign.com,approve,yes,,,,`

## shakeguys.com

| | |
|---|---|
| Website | https://shakeguys.com/ |
| Search title | Shake Guys |
| Found by query | osm:craft=roofer |
| Contact page | https://shakeguys.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "Street Address*": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code*": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-39225122_inspection_2026-11-02T05-21-25-446Z.jpg)

Suggested CSV line: `shakeguys.com,approve,yes,,,,`

## bigfishroofing.com

| | |
|---|---|
| Website | https://www.bigfishroofing.com/ |
| Search title | Big Fish Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.dot-services.org/articles/choosing-roofing-supplies-and-contractors.html?psystem=PW&domain=www.bigfishroofing.com&oref=https%3A%2F%2Fwww.bigfishroofing.com%2F&trafficTarget=reseller |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-c7ef02d3_inspection_2026-11-02T05-13-56-749Z.jpg)

Suggested CSV line: `bigfishroofing.com,approve,yes,,,,`

## sandiegoroofking.com

| | |
|---|---|
| Website | https://www.sandiegoroofking.com/ |
| Search title | Roof King Roofing & Solar |
| Found by query | osm:craft=roofer |
| Contact page | https://www.sandiegoroofking.com/request-roofing-estimate |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-bcf53113_inspection_2026-11-02T05-14-23-044Z.jpg)

Suggested CSV line: `sandiegoroofking.com,approve,yes,,,,`

## kitsaproofpros.com

| | |
|---|---|
| Website | https://kitsaproofpros.com/ |
| Search title | Kitsap Roof Pros |
| Found by query | osm:craft=roofer |
| Contact page | https://kitsaproofpros.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is newsletter
Review: No message field detected
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-8cf108b0_inspection_2026-11-02T05-15-52-724Z.jpg)

Suggested CSV line: `kitsaproofpros.com,approve,yes,,,,`

## roofingexcel.com

| | |
|---|---|
| Website | https://www.roofingexcel.com/ |
| Search title | Excel Roofing and Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://www.semperficonstruction.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-899deaf9_inspection_2026-11-02T05-16-13-197Z.jpg)

Suggested CSV line: `roofingexcel.com,approve,yes,,,,`

## frontlineconsultantsllc.com

| | |
|---|---|
| Website | https://www.frontlineconsultantsllc.com/ |
| Search title | Frontline Consultants & Contracting LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.frontlineconsultantsllc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-ae2b6099_inspection_2026-11-02T05-17-16-642Z.jpg)

Suggested CSV line: `frontlineconsultantsllc.com,approve,yes,,,,`

## empirellc.biz

| | |
|---|---|
| Website | https://empirellc.biz/ |
| Search title | Empire Construction |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `empirellc.biz,approve,yes,,,,`

## highroadroofing.com

| | |
|---|---|
| Website | https://highroadroofing.com/ |
| Search title | Highroad Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://highroadroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-884d715d_inspection_2026-11-02T05-17-59-181Z.jpg)

Suggested CSV line: `highroadroofing.com,approve,yes,,,,`

## sdbarnesconstruction.com

| | |
|---|---|
| Website | https://www.sdbarnesconstruction.com/ |
| Search title | S.D. Barnes Construction Company |
| Found by query | osm:craft=roofer |
| Contact page | https://www.sdbarnesconstruction.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "First and Last Name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-49981d6d_inspection_2026-11-02T05-18-19-673Z.jpg)

Suggested CSV line: `sdbarnesconstruction.com,approve,yes,,,,`

## stapletonroofing.com

| | |
|---|---|
| Website | https://www.stapletonroofing.com/ |
| Search title | Stapleton Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://stapletonroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-3917fc3b_inspection_2026-11-02T05-19-56-946Z.jpg)

Suggested CSV line: `stapletonroofing.com,approve,yes,,,,`

## tresnakconstruction.com

| | |
|---|---|
| Website | https://www.tresnakconstruction.com/ |
| Search title | Tresnak Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://tresnakconstruction.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-ce14bfde_inspection_2026-11-02T05-21-39-620Z.jpg)

Suggested CSV line: `tresnakconstruction.com,approve,yes,,,,`

## ironfortressroofing.com

| | |
|---|---|
| Website | https://ironfortressroofing.com/ |
| Search title | Iron Fortress Metal Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://ironfortressroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-627beefe_inspection_2026-11-02T05-20-34-111Z.jpg)

Suggested CSV line: `ironfortressroofing.com,approve,yes,,,,`

## floridacleanroof.com

| | |
|---|---|
| Website | https://floridacleanroof.com/ |
| Search title | Clean Roof |
| Found by query | osm:craft=roofer |
| Contact page | https://floridacleanroof.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required dropdown "Services(Required)" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-33e1a854_inspection_2026-11-02T05-20-25-770Z.jpg)

Suggested CSV line: `floridacleanroof.com,approve,yes,,,,`

## poseidonroof.com

| | |
|---|---|
| Website | https://www.poseidonroof.com/ |
| Search title | Poseidon Roofing LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://poseidonroof.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required dropdown "Type of work(Required)" has no truthful option
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-f70673ab_inspection_2026-11-02T05-19-02-002Z.jpg)

Suggested CSV line: `poseidonroof.com,approve,yes,,,,`

## spaderoofing.com

| | |
|---|---|
| Website | https://www.spaderoofing.com/ |
| Search title | Spade Roofing and Gutters |
| Found by query | osm:craft=roofer |
| Contact page | https://www.spaderoofing.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required choice (Shingle Roof Inspection / Metal Roof Inspection / Roof Repair / Roof Replacement) has no truthful option
Review: Required last name field "Last Name  *": set sender lastName in campaign.json to allow this form
Review: Required dropdown "State  *" has no truthful option
Review: Required zip field "Zip  *": set sender zip in campaign.json to allow this form
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-b20e2902_inspection_2026-11-02T05-18-37-328Z.jpg)

Suggested CSV line: `spaderoofing.com,approve,yes,,,,`

## middletnroof.com

| | |
|---|---|
| Website | https://middletnroof.com/ |
| Search title | Trusted Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://middletnroof.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required dropdown "Select Service" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-cc573bff_inspection_2026-11-02T05-25-56-086Z.jpg)

Suggested CSV line: `middletnroof.com,approve,yes,,,,`

## koroofing.net

| | |
|---|---|
| Website | https://koroofing.net/ |
| Search title | KO Roofing & Storm Repair |
| Found by query | osm:craft=roofer |
| Contact page | https://koroofing.net/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Address*": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-42688cca_inspection_2026-11-02T05-29-42-669Z.jpg)

Suggested CSV line: `koroofing.net,approve,yes,,,,`

## gccsroofing.com

| | |
|---|---|
| Website | https://gccsroofing.com/ |
| Search title | GCCS Roofing, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://gccsroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "First and Last Name": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-ec7cf544_inspection_2026-11-02T05-30-36-253Z.jpg)

Suggested CSV line: `gccsroofing.com,approve,yes,,,,`

## benchmarkexteriors.com

| | |
|---|---|
| Website | https://www.benchmarkexteriors.com/ |
| Search title | Benchmark Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | https://www.benchmarkexteriors.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Address(Required)": set sender address in campaign.json to allow this form
Review: Required dropdown "State(Required)" has no truthful option
Review: Required dropdown "Project Type(Required)" has no truthful option
Review: Required dropdown "How did you hear about us?(Required)" has no truthful option
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-36da0454_inspection_2026-11-02T05-26-27-936Z.jpg)

Suggested CSV line: `benchmarkexteriors.com,approve,yes,,,,`

## gandbrosroofing.com

| | |
|---|---|
| Website | https://gandbrosroofing.com/ |
| Search title | G and Bros Roofing LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://gandbrosroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-b6cbd597_inspection_2026-11-02T05-25-02-935Z.jpg)

Suggested CSV line: `gandbrosroofing.com,approve,yes,,,,`

## lenoxroof.com

| | |
|---|---|
| Website | https://lenoxroof.com/ |
| Search title | Lenox Roofing Solutions |
| Found by query | osm:craft=roofer |
| Contact page | https://lenoxroof.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "last_name": set sender lastName in campaign.json to allow this form
Review: Required address field "address": set sender address in campaign.json to allow this form
Review: Required zip field "zip_code": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-7498ff80_inspection_2026-11-02T05-22-53-864Z.jpg)

Suggested CSV line: `lenoxroof.com,approve,yes,,,,`

## mypinnacleroofing.com

| | |
|---|---|
| Website | https://mypinnacleroofing.com/ |
| Search title | Pinnacle Roofing & Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://mypinnacleroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-e84e73fd_inspection_2026-11-02T05-29-34-542Z.jpg)

Suggested CSV line: `mypinnacleroofing.com,approve,yes,,,,`

## gutterroofsolutionsnw.com

| | |
|---|---|
| Website | https://www.gutterroofsolutionsnw.com/ |
| Search title | Gutter & Roof Solutions NW |
| Found by query | osm:craft=roofer |
| Contact page | https://gutterroofsolutions.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-90f3f23e_inspection_2026-11-02T05-29-16-414Z.jpg)

Suggested CSV line: `gutterroofsolutionsnw.com,approve,yes,,,,`

## duboroofing.com

| | |
|---|---|
| Website | https://duboroofing.com/ |
| Search title | Dubo Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://duboroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Review: Required last name field "LAST NAME *": set sender lastName in campaign.json to allow this form
Review: Required address field "STREET *": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP *": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-57eaf4ea_inspection_2026-11-02T05-28-24-361Z.jpg)

Suggested CSV line: `duboroofing.com,approve,yes,,,,`

## pro-restorationllc.com

| | |
|---|---|
| Website | https://www.pro-restorationllc.com/ |
| Search title | Pro Restoration LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://pro-restorationllc.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-e6fc814b_inspection_2026-11-02T05-26-50-088Z.jpg)

Suggested CSV line: `pro-restorationllc.com,approve,yes,,,,`

## platinumexteriors.net

| | |
|---|---|
| Website | https://platinumexteriors.net/ |
| Search title | Platinum Exteriors LLC |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: robots.txt disallows automated access to the site
~~~

Suggested CSV line: `platinumexteriors.net,approve,yes,,,,`

## amroofingandsiding.com

| | |
|---|---|
| Website | https://amroofingandsiding.com/ |
| Search title | AM Roofing and Siding |
| Found by query | osm:craft=roofer |
| Contact page | https://amroofingandsiding.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required dropdown "Select A Service" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-f11a7562_inspection_2026-11-02T05-25-45-796Z.jpg)

Suggested CSV line: `amroofingandsiding.com,approve,yes,,,,`

## trustroofing.com

| | |
|---|---|
| Website | https://trustroofing.com/ |
| Search title | Trust Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://trustroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-f29136c0_inspection_2026-11-02T05-25-37-148Z.jpg)

Suggested CSV line: `trustroofing.com,approve,yes,,,,`

## kdroofing.com

| | |
|---|---|
| Website | https://kdroofing.com/ |
| Search title | K D Roofing Inc |
| Found by query | osm:craft=roofer |
| Contact page | https://kdroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-ea4e62d9_inspection_2026-11-02T05-24-54-389Z.jpg)

Suggested CSV line: `kdroofing.com,approve,yes,,,,`

## rooftopinnovations.com

| | |
|---|---|
| Website | https://rooftopinnovations.com/ |
| Search title | Roof Top Innovations |
| Found by query | osm:craft=roofer |
| Contact page | https://www.rooftopinnovations.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is newsletter
Review: No message field detected
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-b28affbb_inspection_2026-11-02T05-24-03-794Z.jpg)

Suggested CSV line: `rooftopinnovations.com,approve,yes,,,,`

## elevatedroofinc.com

| | |
|---|---|
| Website | https://www.elevatedroofinc.com/ |
| Search title | Elevated Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.elevatedroofinc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-baa188c0_inspection_2026-11-02T05-23-38-954Z.jpg)

Suggested CSV line: `elevatedroofinc.com,approve,yes,,,,`

## sandiegocountyroofing.com

| | |
|---|---|
| Website | https://sandiegocountyroofing.com/ |
| Search title | San Diego County Roofing & Solar |
| Found by query | osm:craft=roofer |
| Contact page | https://sandiegocountyroofing.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required dropdown "project_type" has no truthful option
Review: Required last name field "last_name": set sender lastName in campaign.json to allow this form
Review: Required address field "property_address": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-0a95efb0_inspection_2026-11-02T05-27-31-403Z.jpg)

Suggested CSV line: `sandiegocountyroofing.com,approve,yes,,,,`

## scottsroofingcolorado.com

| | |
|---|---|
| Website | https://www.scottsroofingcolorado.com/ |
| Search title | Scott's Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.scottsroofingcolorado.com/contact-scotts-roofing/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-3b0cce14_inspection_2026-11-02T05-29-55-525Z.jpg)

Suggested CSV line: `scottsroofingcolorado.com,approve,yes,,,,`

## cleancut.com

| | |
|---|---|
| Website | https://cleancut.com/ |
| Search title | Clean Cut Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://cleancut.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: No email field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-1613fbd8_inspection_2026-11-02T05-23-05-459Z.jpg)

Suggested CSV line: `cleancut.com,approve,yes,,,,`

## advancedroofingmn.com

| | |
|---|---|
| Website | https://advancedroofingmn.com/ |
| Search title | Advanced Roofing & Siding Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://www.advancedroofingmn.com/contact-advanced-roofing-siding |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Review: Required address field "Address Line 1
(required)": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP Code
(required)": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-c0a359e3_inspection_2026-11-02T05-30-28-728Z.jpg)

Suggested CSV line: `advancedroofingmn.com,approve,yes,,,,`

## veteranscontractingllc.com

| | |
|---|---|
| Website | https://www.veteranscontractingllc.com/ |
| Search title | V.C. Veterans Contracting LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://veteranscontractingllc.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is job application
Review: Required dropdown "Service" has no truthful option
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-a2f08e27_inspection_2026-11-02T05-30-18-436Z.jpg)

Suggested CSV line: `veteranscontractingllc.com,approve,yes,,,,`

## suttonsinc.com

| | |
|---|---|
| Website | https://suttonsinc.com/ |
| Search title | Sutton's |
| Found by query | osm:craft=roofer |
| Contact page | https://suttonsinc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-9a13e5ec_inspection_2026-11-02T05-28-51-434Z.jpg)

Suggested CSV line: `suttonsinc.com,approve,yes,,,,`

## embrysroofing.com

| | |
|---|---|
| Website | https://embrysroofing.com/ |
| Search title | Embry's Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://embrysroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-00314e76_inspection_2026-11-02T05-28-09-565Z.jpg)

Suggested CSV line: `embrysroofing.com,approve,yes,,,,`

## deanroofs.com

| | |
|---|---|
| Website | https://deanroofs.com/ |
| Search title | Dean Roofing Company |
| Found by query | osm:craft=roofer |
| Contact page | https://deanroofs.com/about-us/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Review: Required address field "Street": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-0256e964_inspection_2026-11-02T05-28-03-227Z.jpg)

Suggested CSV line: `deanroofs.com,approve,yes,,,,`

## hiresuperroofers.com

| | |
|---|---|
| Website | https://hiresuperroofers.com/ |
| Search title | Super Roofers |
| Found by query | osm:craft=roofer |
| Contact page | https://hiresuperroofers.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-651f90b1_inspection_2026-11-02T05-27-52-949Z.jpg)

Suggested CSV line: `hiresuperroofers.com,approve,yes,,,,`

## askresortexteriors.com

| | |
|---|---|
| Website | https://askresortexteriors.com/ |
| Search title | Resort Exteriors, LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.askresortexteriors.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required dropdown "Services" has no truthful option
Review: Required zip field "Postal code": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-7f04f10e_inspection_2026-11-02T05-27-17-846Z.jpg)

Suggested CSV line: `askresortexteriors.com,approve,yes,,,,`

## brehmroofing.com

| | |
|---|---|
| Website | https://brehmroofing.com/ |
| Search title | Brehm Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://brehmroofing.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last name
*": set sender lastName in campaign.json to allow this form
Review: Required address field "Property address *": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code
*": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-8e07891f_inspection_2026-11-02T05-28-45-067Z.jpg)

Suggested CSV line: `brehmroofing.com,approve,yes,,,,`

## premiereroofingnc.com

| | |
|---|---|
| Website | https://premiereroofingnc.com/ |
| Search title | Premiere Roofing & Gutters |
| Found by query | osm:craft=roofer |
| Contact page | https://premiereroofingnc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-9fc8d38f_inspection_2026-11-02T05-26-07-643Z.jpg)

Suggested CSV line: `premiereroofingnc.com,approve,yes,,,,`

## touchstonehandyman.com

| | |
|---|---|
| Website | https://touchstonehandyman.com/ |
| Search title | Touchstone Handyman |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `touchstonehandyman.com,approve,yes,,,,`

## forestroofs.com

| | |
|---|---|
| Website | https://www.forestroofs.com/ |
| Search title | Forest Roofs |
| Found by query | osm:craft=roofer |
| Contact page | https://forestroofs.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-f2d83d33_inspection_2026-11-02T05-25-14-574Z.jpg)

Suggested CSV line: `forestroofs.com,approve,yes,,,,`

## greatvalleyroofing.com

| | |
|---|---|
| Website | https://www.greatvalleyroofing.com/ |
| Search title | Great Valley Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://greatvalleyroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-71f269e4_inspection_2026-11-02T05-24-38-002Z.jpg)

Suggested CSV line: `greatvalleyroofing.com,approve,yes,,,,`

## steadfastroofingfl.com

| | |
|---|---|
| Website | https://steadfastroofingfl.com/ |
| Search title | Steadfast Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://steadfastroofingfl.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-b7246257_inspection_2026-11-02T05-24-26-751Z.jpg)

Suggested CSV line: `steadfastroofingfl.com,approve,yes,,,,`

## nextdimensionroofing.com

| | |
|---|---|
| Website | https://nextdimensionroofing.com/ |
| Search title | Next Dimension Roofing & Solar |
| Found by query | osm:craft=roofer |
| Contact page | https://nextdimensionconstruction.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-d7c4b04f_inspection_2026-11-02T05-23-26-093Z.jpg)

Suggested CSV line: `nextdimensionroofing.com,approve,yes,,,,`

## alamoroofingcontractors.com

| | |
|---|---|
| Website | https://alamoroofingcontractors.com/ |
| Search title | Alamo Roofing Contractors |
| Found by query | osm:craft=roofer |
| Contact page | https://alamoroofingcontractors.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required field "item_meta[2]" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-d41b6111_inspection_2026-11-02T05-22-45-740Z.jpg)

Suggested CSV line: `alamoroofingcontractors.com,approve,yes,,,,`

## springfieldroofing.com

| | |
|---|---|
| Website | https://springfieldroofing.com/ |
| Search title | Springfield Roofing & Sheet Metal |
| Found by query | osm:craft=roofer |
| Contact page | https://springfieldroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "Address*": set sender address in campaign.json to allow this form
Review: Required dropdown "Service*" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-8eba21b5_inspection_2026-11-02T05-22-25-822Z.jpg)

Suggested CSV line: `springfieldroofing.com,approve,yes,,,,`

## indytrojanroofing.com

| | |
|---|---|
| Website | https://indytrojanroofing.com/ |
| Search title | Trojan Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://indytrojanroofing.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Review: Required dropdown "Are You a New Customer?*" has no truthful option
Review: Required address field "Address*": set sender address in campaign.json to allow this form
Review: Required zip field "Zip*": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-672a08fc_inspection_2026-11-02T05-22-17-386Z.jpg)

Suggested CSV line: `indytrojanroofing.com,approve,yes,,,,`

## indyroofcompany.com

| | |
|---|---|
| Website | https://indyroofcompany.com/ |
| Search title | Indy Roof Company |
| Found by query | osm:craft=roofer |
| Contact page | https://indyroofandrestoration.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
BLOCKED: Form purpose is job application
Review: No submit button detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-0d51ce41_inspection_2026-11-02T05-31-01-877Z.jpg)

Suggested CSV line: `indyroofcompany.com,approve,yes,,,,`

## equityroofs.com

| | |
|---|---|
| Website | https://equityroofs.com/ |
| Search title | Equity Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.equityroofs.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-e3cb2fec_inspection_2026-11-02T05-30-52-720Z.jpg)

Suggested CSV line: `equityroofs.com,approve,yes,,,,`

## eriehome.com

| | |
|---|---|
| Website | https://eriehome.com/ |
| Search title | Erie Home |
| Found by query | osm:craft=roofer |
| Contact page | https://eriehome.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-258c4025_inspection_2026-11-02T05-30-10-756Z.jpg)

Suggested CSV line: `eriehome.com,approve,yes,,,,`

## fortifiedroofing.com

| | |
|---|---|
| Website | https://www.fortifiedroofing.com/ |
| Search title | Fortified Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.fortifiedroofing.com/contact/?wc\_cid=direct%2B..%2Bnone%2B..%2B%2B..%2B%2B..%2B%2B..%2B%2B..%2Bhttps%253A%252F%252Fwww.fortifiedroofing.com%252F%2B..%2B77654-c42b69c7-1335-664c-565e-d22451 |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required zip field "your-zip": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-cc4ac352_inspection_2026-11-02T05-37-46-689Z.jpg)

Suggested CSV line: `fortifiedroofing.com,approve,yes,,,,`

## savage-roofing.com

| | |
|---|---|
| Website | https://savage-roofing.com/ |
| Search title | Savage Roofing |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website has a broken HTTPS certificate
~~~

Suggested CSV line: `savage-roofing.com,approve,yes,,,,`

## blcroofingoh.com

| | |
|---|---|
| Website | https://blcroofingoh.com/ |
| Search title | BLC Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://blcroofingoh.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-10e6f62d_inspection_2026-11-02T05-32-31-536Z.jpg)

Suggested CSV line: `blcroofingoh.com,approve,yes,,,,`

## apexroofexperts.net

| | |
|---|---|
| Website | https://apexroofexperts.net/ |
| Search title | Apex Roofing and Sheet Metal |
| Found by query | osm:craft=roofer |
| Contact page | https://apexroofexperts.net/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-3410589c_inspection_2026-11-02T05-33-06-729Z.jpg)

Suggested CSV line: `apexroofexperts.net,approve,yes,,,,`

## diceroofingsolutions.com

| | |
|---|---|
| Website | https://diceroofingsolutions.com/ |
| Search title | Dice Roofing Solutions |
| Found by query | osm:craft=roofer |
| Contact page | https://dicebuildingsolutions.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required address field "Address*": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code*": set sender zip in campaign.json to allow this form
Review: Required dropdown "Desired Service*" has no truthful option
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-716ca1cf_inspection_2026-11-02T05-33-19-103Z.jpg)

Suggested CSV line: `diceroofingsolutions.com,approve,yes,,,,`

## roofingcenter.com

| | |
|---|---|
| Website | https://roofingcenter.com/ |
| Search title | The Roofing Center |
| Found by query | osm:craft=roofer |
| Contact page | https://roofingcenter.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-f50b5bd8_inspection_2026-11-02T05-33-40-879Z.jpg)

Suggested CSV line: `roofingcenter.com,approve,yes,,,,`

## hammerheadroof.com

| | |
|---|---|
| Website | https://hammerheadroof.com/ |
| Search title | Hammerhead Roof |
| Found by query | osm:craft=roofer |
| Contact page | https://hammerheadroof.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "ADDRESS:": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-6bb2cbda_inspection_2026-11-02T05-34-09-264Z.jpg)

Suggested CSV line: `hammerheadroof.com,approve,yes,,,,`

## arrowroofco.com

| | |
|---|---|
| Website | https://arrowroofco.com/ |
| Search title | Arrow Roofing and Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | https://arrowroofco.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-8dbfc4e2_inspection_2026-11-02T05-34-36-002Z.jpg)

Suggested CSV line: `arrowroofco.com,approve,yes,,,,`

## greenlightroof.com

| | |
|---|---|
| Website | https://www.greenlightroof.com/ |
| Search title | GreenLight Roofing and Remodeling |
| Found by query | osm:craft=roofer |
| Contact page | https://greenlightroof.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-52a8bb8c_inspection_2026-11-02T05-34-56-980Z.jpg)

Suggested CSV line: `greenlightroof.com,approve,yes,,,,`

## voyagerexteriors.com

| | |
|---|---|
| Website | https://voyagerexteriors.com/ |
| Search title | Voyager Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | https://voyagerexteriors.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required dropdown "Service*" has no truthful option
Review: Required address field "Full Address*": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-d59f26da_inspection_2026-11-02T05-35-22-316Z.jpg)

Suggested CSV line: `voyagerexteriors.com,approve,yes,,,,`

## cabezonroofing.com

| | |
|---|---|
| Website | https://www.cabezonroofing.com/ |
| Search title | Cabezon Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.cabezonroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-c4ff4e84_inspection_2026-11-02T05-36-23-491Z.jpg)

Suggested CSV line: `cabezonroofing.com,approve,yes,,,,`

## homeevolution.net

| | |
|---|---|
| Website | https://www.homeevolution.net/ |
| Search title | Home Evolution Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://homeevolution.net/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-62347b37_inspection_2026-11-02T05-37-05-298Z.jpg)

Suggested CSV line: `homeevolution.net,approve,yes,,,,`

## hailcoroofing.com

| | |
|---|---|
| Website | https://hailcoroofing.com/ |
| Search title | Hailco Roofing LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://hailcoroofing.com/company/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "PROPERTY ADDRESS": set sender address in campaign.json to allow this form
Review: Required dropdown "WHAT DO YOU NEED?
Choose a service…
Roof Replacement
Roof Repair
Storm Damage / Insurance Claim
Roof Inspection
New Construction / Addition
Commercial Property
Not sure - needs assessment" has no truthful option
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-a4e5efeb_inspection_2026-11-02T05-37-21-017Z.jpg)

Suggested CSV line: `hailcoroofing.com,approve,yes,,,,`

## tristateroofingquincy.com

| | |
|---|---|
| Website | https://tristateroofingquincy.com/ |
| Search title | Tri State Roofing II |
| Found by query | osm:craft=roofer |
| Contact page | https://tristateroofingquincy.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-a22071d6_inspection_2026-11-02T05-38-28-645Z.jpg)

Suggested CSV line: `tristateroofingquincy.com,approve,yes,,,,`

## kangaroof.com

| | |
|---|---|
| Website | https://kangaroof.com/ |
| Search title | A1 Roofing's Kangaroof |
| Found by query | osm:craft=roofer |
| Contact page | https://kangaroof.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-c61591ec_inspection_2026-11-02T05-38-35-007Z.jpg)

Suggested CSV line: `kangaroof.com,approve,yes,,,,`

## proline-roofing.com

| | |
|---|---|
| Website | https://www.proline-roofing.com/ |
| Search title | ProLine Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.proline-roofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "What can we help with?" has no truthful option
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-6c8c1358_inspection_2026-11-02T05-38-44-169Z.jpg)

Suggested CSV line: `proline-roofing.com,approve,yes,,,,`

## erscontractor.com

| | |
|---|---|
| Website | https://erscontractor.com/ |
| Search title | Essential Restorations Solutions |
| Found by query | osm:craft=roofer |
| Contact page | https://erscontractor.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-989717a4_inspection_2026-11-02T05-31-14-033Z.jpg)

Suggested CSV line: `erscontractor.com,approve,yes,,,,`

## deluxeroofingdfw.com

| | |
|---|---|
| Website | https://deluxeroofingdfw.com/ |
| Search title | Deluxe Roofing & Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://deluxeroofingdfw.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-9ad4c0e9_inspection_2026-11-02T05-32-15-554Z.jpg)

Suggested CSV line: `deluxeroofingdfw.com,approve,yes,,,,`

## rooftastic.com

| | |
|---|---|
| Website | https://www.rooftastic.com/ |
| Search title | Roof-Tastic & Beyond Exteriors\! |
| Found by query | osm:craft=roofer |
| Contact page | https://rooftastic.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Are You A New Customer?(Required)" has no truthful option
Review: Required field "How Did You Hear About Us?(Required)" is not a standard field
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-143f8a26_inspection_2026-11-02T05-32-44-165Z.jpg)

Suggested CSV line: `rooftastic.com,approve,yes,,,,`

## youngconstructionnorthiowa.com

| | |
|---|---|
| Website | https://youngconstructionnorthiowa.com/ |
| Search title | Young Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://youngconstructionnorthiowa.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-bdcf363a_inspection_2026-11-02T05-33-49-034Z.jpg)

Suggested CSV line: `youngconstructionnorthiowa.com,approve,yes,,,,`

## clemenshomesolutions.com

| | |
|---|---|
| Website | https://clemenshomesolutions.com/ |
| Search title | Clemens Home Solutions |
| Found by query | osm:craft=roofer |
| Contact page | https://www.clemenshomesolutions.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-ad94e3f5_inspection_2026-11-02T05-34-01-149Z.jpg)

Suggested CSV line: `clemenshomesolutions.com,approve,yes,,,,`

## myallseasons.com

| | |
|---|---|
| Website | https://myallseasons.com/ |
| Search title | All Seasons Roofing & Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://myallseasons.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required zip field "form_fields[field_af26d5f]": set sender zip in campaign.json to allow this form
Review: Required dropdown "form_fields[field_3d60245]" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-f13a42dd_inspection_2026-11-02T05-35-12-181Z.jpg)

Suggested CSV line: `myallseasons.com,approve,yes,,,,`

## teflonroofing.com

| | |
|---|---|
| Website | https://www.teflonroofing.com/ |
| Search title | Teflon Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.teflonroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-be06b9e1_inspection_2026-11-02T05-35-38-366Z.jpg)

Suggested CSV line: `teflonroofing.com,approve,yes,,,,`

## oldtimersroofing.com

| | |
|---|---|
| Website | https://oldtimersroofing.com/ |
| Search title | Old Timers Roofing, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://oldtimersroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-d30bbcdd_inspection_2026-11-02T05-35-52-321Z.jpg)

Suggested CSV line: `oldtimersroofing.com,approve,yes,,,,`

## ranchroofing.com

| | |
|---|---|
| Website | https://ranchroofing.com/ |
| Search title | Ranch Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://ranchroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-6fff8e2a_inspection_2026-11-02T05-36-16-961Z.jpg)

Suggested CSV line: `ranchroofing.com,approve,yes,,,,`

## rhino-roofs.com

| | |
|---|---|
| Website | https://rhino-roofs.com/ |
| Search title | Rhino Restoration of Georgia |
| Found by query | osm:craft=roofer |
| Contact page | https://rhino-roofs.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-edaa4c1b_inspection_2026-11-02T05-37-12-013Z.jpg)

Suggested CSV line: `rhino-roofs.com,approve,yes,,,,`

## smartproroofing.com

| | |
|---|---|
| Website | https://smartproroofing.com/ |
| Search title | SmartPRO Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://smartproroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-3ad4ba1d_inspection_2026-11-02T05-37-35-780Z.jpg)

Suggested CSV line: `smartproroofing.com,approve,yes,,,,`

## joylandroofing.com

| | |
|---|---|
| Website | https://joylandroofing.com/ |
| Search title | Joyland Roofing & Exteriors LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.joylandroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-dac66ba4_inspection_2026-11-02T05-38-08-658Z.jpg)

Suggested CSV line: `joylandroofing.com,approve,yes,,,,`

## roofxpress.com

| | |
|---|---|
| Website | https://www.roofxpress.com/ |
| Search title | Roof Xpress |
| Found by query | osm:craft=roofer |
| Contact page | https://www.roofxpress.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Address *": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-2a17f627_inspection_2026-11-02T05-38-51-634Z.jpg)

Suggested CSV line: `roofxpress.com,approve,yes,,,,`

## alterphaseroofing.com

| | |
|---|---|
| Website | https://alterphaseroofing.com/ |
| Search title | Alter Phase Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://alterphaseroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-d53b78a1_inspection_2026-11-02T05-39-01-384Z.jpg)

Suggested CSV line: `alterphaseroofing.com,approve,yes,,,,`

## horizonroofingca.com

| | |
|---|---|
| Website | https://horizonroofingca.com/ |
| Search title | Horizon Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://horizonroofingca.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-8ad239c4_inspection_2026-11-02T05-39-14-416Z.jpg)

Suggested CSV line: `horizonroofingca.com,approve,yes,,,,`

## tycosgencon.com

| | |
|---|---|
| Website | https://www.tycosgencon.com/ |
| Search title | Tycos Roofing and Siding |
| Found by query | osm:craft=roofer |
| Contact page | https://www.tycosgencon.com/?\_\_cf\_chl\_rt\_tk=M28Y3rh6Eny1lpL5Kl4\_xqTCG52INsv1LmjP2TC7L7c-1793597974-1.0.1.1-QWtc1yfCf9AggH.nxESV7.U10douzEXb10l7kPBQRhQ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-47d7c214_inspection_2026-11-02T05-39-34-171Z.jpg)

Suggested CSV line: `tycosgencon.com,approve,yes,,,,`

## maxforceroofing.com

| | |
|---|---|
| Website | https://www.maxforceroofing.com/ |
| Search title | MaxForce Roofing and Siding LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.maxforceroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-5d31690e_inspection_2026-11-02T05-39-41-807Z.jpg)

Suggested CSV line: `maxforceroofing.com,approve,yes,,,,`

## onenationexteriors.com

| | |
|---|---|
| Website | https://www.onenationexteriors.com/ |
| Search title | One Nation Exteriors LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.onenationexteriors.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-1fd38e73_inspection_2026-11-02T05-32-52-770Z.jpg)

Suggested CSV line: `onenationexteriors.com,approve,yes,,,,`

## lakemurrayroofing.net

| | |
|---|---|
| Website | https://lakemurrayroofing.net/ |
| Search title | Lake Murray Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://lakemurrayroofing.net/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-13ad583f_inspection_2026-11-02T05-36-38-211Z.jpg)

Suggested CSV line: `lakemurrayroofing.net,approve,yes,,,,`

## 5starroofingusa.com

| | |
|---|---|
| Website | https://5starroofingusa.com/ |
| Search title | 5 Star Roofing & Restoration |
| Found by query | osm:craft=roofer |
| Contact page | https://www.5starroofingusa.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile)
BLOCKED: Form purpose is job application
Review: Required address field "Name": set sender address in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-9012a2e6_inspection_2026-11-02T05-38-22-254Z.jpg)

Suggested CSV line: `5starroofingusa.com,approve,yes,,,,`

## gunsnhosesllc.com

| | |
|---|---|
| Website | https://gunsnhosesllc.com/ |
| Search title | Guns N Hoses LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://gunsnhosesllc.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required choice (Yes / No) has no truthful option
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required address field "Address": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-fbad0591_inspection_2026-11-02T05-31-21-493Z.jpg)

Suggested CSV line: `gunsnhosesllc.com,approve,yes,,,,`

## collinsandsonroofing.com

| | |
|---|---|
| Website | https://collinsandsonroofing.com/ |
| Search title | Collins & Son Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://collinsandsonroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-1422c7cc_inspection_2026-11-02T05-31-44-269Z.jpg)

Suggested CSV line: `collinsandsonroofing.com,approve,yes,,,,`

## bensoncontracting.com

| | |
|---|---|
| Website | https://www.bensoncontracting.com/ |
| Search title | Benson Contracting |
| Found by query | osm:craft=roofer |
| Contact page | https://www.bensoncontracting.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Review: Required address field "Address *": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code *": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-349f8d5e_inspection_2026-11-02T05-32-00-461Z.jpg)

Suggested CSV line: `bensoncontracting.com,approve,yes,,,,`

## rbuckroofing.com

| | |
|---|---|
| Website | https://rbuckroofing.com/ |
| Search title | Buck Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://rbuckroofing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-b7c478d1_inspection_2026-11-02T05-34-24-426Z.jpg)

Suggested CSV line: `rbuckroofing.com,approve,yes,,,,`

## puetzconstruction.com

| | |
|---|---|
| Website | https://puetzconstruction.com/ |
| Search title | Puetz Construction, LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://puetzconstruction.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required zip field "Zipcode(Required)": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-9bdb8c88_inspection_2026-11-02T05-33-29-738Z.jpg)

Suggested CSV line: `puetzconstruction.com,approve,yes,,,,`

## resolveroofing.com

| | |
|---|---|
| Website | https://resolveroofing.com/ |
| Search title | Resolve Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://resolveroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is booking
Review: Required address field "Service Address": set sender address in campaign.json to allow this form
Review: Required field "Preferred Date" is not a standard field
Review: Required field "Preferred Time" is not a standard field
Review: Required dropdown "Are you a new customer?*" has no truthful option
Form purpose: booking
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-f0f9ac79_inspection_2026-11-02T05-39-27-174Z.jpg)

Suggested CSV line: `resolveroofing.com,approve,yes,,,,`

## therooferplus.com

| | |
|---|---|
| Website | https://www.therooferplus.com/ |
| Search title | The Roofer Plus |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `therooferplus.com,approve,yes,,,,`

## goodroofingcompany.com

| | |
|---|---|
| Website | https://www.goodroofingcompany.com/ |
| Search title | Good Roofing Company |
| Found by query | osm:craft=roofer |
| Contact page | https://www.goodroofingcompany.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-72e8a30b_inspection_2026-11-02T05-41-26-933Z.jpg)

Suggested CSV line: `goodroofingcompany.com,approve,yes,,,,`

## buckeyeconstructionoh.com

| | |
|---|---|
| Website | https://buckeyeconstructionoh.com/ |
| Search title | Buckeye Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://buckeyeconstructionoh.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-d1f35604_inspection_2026-11-02T05-41-08-468Z.jpg)

Suggested CSV line: `buckeyeconstructionoh.com,approve,yes,,,,`

## starwayroofing.com

| | |
|---|---|
| Website | https://starwayroofing.com/ |
| Search title | Starway Roof Systems |
| Found by query | osm:craft=roofer |
| Contact page | https://starwayroofing.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: No message field detected
Review: No submit button detected
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-6a9d983b_inspection_2026-11-02T05-41-00-523Z.jpg)

Suggested CSV line: `starwayroofing.com,approve,yes,,,,`

## wahomeimprovements.com

| | |
|---|---|
| Website | https://www.wahomeimprovements.com/ |
| Search title | WA Home Improvements |
| Found by query | osm:craft=roofer |
| Contact page | https://www.wahomeimprovements.com/contact-us/2274564 |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-ed46052a_inspection_2026-11-02T05-41-19-831Z.jpg)

Suggested CSV line: `wahomeimprovements.com,approve,yes,,,,`

## theroofresource.com

| | |
|---|---|
| Website | https://theroofresource.com/ |
| Search title | The Roof Resource - Birmingham roof contractor |
| Found by query | osm:craft=roofer |
| Contact page | https://skyevantage.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-0d955d1a_inspection_2026-11-02T05-40-48-251Z.jpg)

Suggested CSV line: `theroofresource.com,approve,yes,,,,`

## square.site

| | |
|---|---|
| Website | https://bcroofinghawaii.square.site/ |
| Search title | BC Roofing Hawaii |
| Found by query | osm:craft=roofer |
| Contact page | https://bcroofinghawaii.square.site/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Subdomain bcroofinghawaii.square.site — verify it belongs to the business.
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-1b4cc559_inspection_2026-11-02T05-39-53-303Z.jpg)

Suggested CSV line: `square.site,approve,yes,,,,`

## fastoroofing.com

| | |
|---|---|
| Website | https://www.fastoroofing.com/ |
| Search title | Fasto Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.fastoroofing.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-b64b26ec_inspection_2026-11-02T05-40-08-329Z.jpg)

Suggested CSV line: `fastoroofing.com,approve,yes,,,,`

## saenzroofing.com

| | |
|---|---|
| Website | https://www.saenzroofing.com/ |
| Search title | Saenz Roofing, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://www.saenzroofing.com/?\_\_cf\_chl\_rt\_tk=Mzt6f97zJwmJCZJf1KjQYXUdxrRlsR\_D6P1rsAQ7yXo-1793598094-1.0.1.1-uyU\_UyKOpt22LVdRAZrcN3Irjgd.66nv.fW3utUekK4 |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-551f3768_inspection_2026-11-02T05-41-34-500Z.jpg)

Suggested CSV line: `saenzroofing.com,approve,yes,,,,`

## rjebconstruction.com

| | |
|---|---|
| Website | https://rjebconstruction.com/ |
| Search title | RJEB Construction |
| Found by query | osm:craft=roofer |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `rjebconstruction.com,approve,yes,,,,`

## thekingsmitigator.com

| | |
|---|---|
| Website | https://www.thekingsmitigator.com/ |
| Search title | The Kings Mitigator, Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://www.thekingsmitigator.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-6ae7cbb4_inspection_2026-11-02T05-40-16-633Z.jpg)

Suggested CSV line: `thekingsmitigator.com,approve,yes,,,,`

## wsmetalroofing.com

| | |
|---|---|
| Website | https://wsmetalroofing.com/ |
| Search title | Weather Shield Metal Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://wsmetalroofing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-576f0b34_inspection_2026-11-02T05-40-23-503Z.jpg)

Suggested CSV line: `wsmetalroofing.com,approve,yes,,,,`

## proqualityroofing.com

| | |
|---|---|
| Website | https://www.proqualityroofing.com/ |
| Search title | Professional Quality Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.proqualityroofing.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/22b8e3a5-56d1-4a2e-96e2-64f8215d5764/run-22b8e3a5_candidate-e0090a89_inspection_2026-11-02T05-40-35-808Z.jpg)

Suggested CSV line: `proqualityroofing.com,approve,yes,,,,`

## envirotechair.com

| | |
|---|---|
| Website | https://envirotechair.com/ |
| Search title | Envirotech Air Quality Services |
| Found by query | osm:craft=hvac |
| Contact page | https://www.envirotechair.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required dropdown "interest" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-554db100_inspection_2026-11-02T05-53-00-852Z.jpg)

Suggested CSV line: `envirotechair.com,approve,yes,,,,`

## bartelsheatingandcooling.com

| | |
|---|---|
| Website | https://www.bartelsheatingandcooling.com/ |
| Search title | Bartels Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.bartelsheatingandcooling.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-95c07232_inspection_2026-11-02T05-52-30-752Z.jpg)

Suggested CSV line: `bartelsheatingandcooling.com,approve,yes,,,,`

## justiceac.com

| | |
|---|---|
| Website | https://www.justiceac.com/ |
| Search title | Justice Air Conditioning & Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://www.justiceac.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-ae154a24_inspection_2026-11-02T05-50-53-984Z.jpg)

Suggested CSV line: `justiceac.com,approve,yes,,,,`

## fivestarmobilehomesupply.com

| | |
|---|---|
| Website | http://fivestarmobilehomesupply.com/ |
| Search title | Five Star Mobile Home Supply |
| Found by query | osm:craft=hvac |
| Contact page | chrome-error://chromewebdata/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-5ad27c67_inspection_2026-11-02T05-50-36-643Z.jpg)

Suggested CSV line: `fivestarmobilehomesupply.com,approve,yes,,,,`

## a1heatingandcooling.net

| | |
|---|---|
| Website | https://a1heatingandcooling.net/ |
| Search title | A1 Heating and Air |
| Found by query | osm:craft=hvac |
| Contact page | https://www.a1heatingandcooling.net/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-848dc9b9_inspection_2026-11-02T05-51-20-447Z.jpg)

Suggested CSV line: `a1heatingandcooling.net,approve,yes,,,,`

## burnsideplumbing.com

| | |
|---|---|
| Website | https://www.burnsideplumbing.com/ |
| Search title | Ward B. Burnside & Co. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.burnsideplumbing.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-8690c8e9_inspection_2026-11-02T05-55-21-489Z.jpg)

Suggested CSV line: `burnsideplumbing.com,approve,yes,,,,`

## vogtheating.com

| | |
|---|---|
| Website | https://www.vogtheating.com/ |
| Search title | VOGT Heating, Air Conditioning & Plumbing |
| Found by query | osm:craft=hvac |
| Contact page | https://www.vogtheating.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-822d712c_inspection_2026-11-02T05-48-54-014Z.jpg)

Suggested CSV line: `vogtheating.com,approve,yes,,,,`

## acrepairaustin.org

| | |
|---|---|
| Website | https://acrepairaustin.org/ |
| Search title | Austin Air Conditioning & Repair |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `acrepairaustin.org,approve,yes,,,,`

## jadesheatingplumbing.com

| | |
|---|---|
| Website | https://www.jadesheatingplumbing.com/ |
| Search title | Jade's Heating & Plumbing |
| Found by query | osm:craft=hvac |
| Contact page | https://www.jadesheatingplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-bafe72b4_inspection_2026-11-02T05-49-20-431Z.jpg)

Suggested CSV line: `jadesheatingplumbing.com,approve,yes,,,,`

## acpro.com

| | |
|---|---|
| Website | https://www.acpro.com/ |
| Search title | AC Pro |
| Found by query | osm:craft=hvac |
| Contact page | https://store.acpro.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-7e023c9b_inspection_2026-11-02T05-49-46-242Z.jpg)

Suggested CSV line: `acpro.com,approve,yes,,,,`

## gogreenhvacinc.com

| | |
|---|---|
| Website | http://www.gogreenhvacinc.com/ |
| Search title | Go Green HVAC Inc |
| Found by query | osm:craft=hvac |
| Contact page | https://www.gogreenhvacinc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-0f18a7a7_inspection_2026-11-02T05-50-27-125Z.jpg)

Suggested CSV line: `gogreenhvacinc.com,approve,yes,,,,`

## crockett-facilities.com

| | |
|---|---|
| Website | https://www.crockett-facilities.com/ |
| Search title | Crockett Facilities Services Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.crockett-facilities.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required dropdown "State(Required)" has no truthful option
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-c8aeb5f1_inspection_2026-11-02T05-50-45-162Z.jpg)

Suggested CSV line: `crockett-facilities.com,approve,yes,,,,`

## stillwellusny.com

| | |
|---|---|
| Website | https://stillwellusny.com/ |
| Search title | Stillwell Team |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `stillwellusny.com,approve,yes,,,,`

## 205cooling.com

| | |
|---|---|
| Website | http://www.205cooling.com/ |
| Search title | Air Conditioning Experts |
| Found by query | osm:craft=hvac |
| Contact page | http://www.205cooling.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-e5287eb2_inspection_2026-11-02T05-48-47-312Z.jpg)

Suggested CSV line: `205cooling.com,approve,yes,,,,`

## fossheating.com

| | |
|---|---|
| Website | https://fossheating.com/ |
| Search title | FOSS Heating and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://fossheating.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-f08f5126_inspection_2026-11-02T05-49-33-187Z.jpg)

Suggested CSV line: `fossheating.com,approve,yes,,,,`

## callschaalyaall.com

| | |
|---|---|
| Website | https://www.callschaalyaall.com/ |
| Search title | Schaal Plumbing, Heating and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://callschaalyaall.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-fb664038_inspection_2026-11-02T05-49-58-699Z.jpg)

Suggested CSV line: `callschaalyaall.com,approve,yes,,,,`

## newriverheatingandair.com

| | |
|---|---|
| Website | https://newriverheatingandair.com/ |
| Search title | New River Heating & Air |
| Found by query | osm:craft=hvac |
| Contact page | https://newriverheatingandair.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is booking
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Review: Required address field "Address
(required)": set sender address in campaign.json to allow this form
Review: Required dropdown "Are you a New Customer?
(required)" has no truthful option
Form purpose: booking
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-c5782f8d_inspection_2026-11-02T05-50-08-288Z.jpg)

Suggested CSV line: `newriverheatingandair.com,approve,yes,,,,`

## oasiscoolingheating.com

| | |
|---|---|
| Website | https://oasiscoolingheating.com/ |
| Search title | Oasis Air Conditioning & Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://oasiscoolingheating.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is search
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Address Line 1": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "Zip Code": set sender zip in campaign.json to allow this form
Form purpose: search
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-53868488_inspection_2026-11-02T05-51-08-141Z.jpg)

Suggested CSV line: `oasiscoolingheating.com,approve,yes,,,,`

## acdesignsinc.net

| | |
|---|---|
| Website | https://www.acdesignsinc.net/ |
| Search title | AC Designs Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.acdesignsinc.net/contact/service |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-9978c0e7_inspection_2026-11-02T05-53-53-548Z.jpg)

Suggested CSV line: `acdesignsinc.net,approve,yes,,,,`

## coldcraft.com

| | |
|---|---|
| Website | https://coldcraft.com/ |
| Search title | Cold Craft |
| Found by query | osm:craft=hvac |
| Contact page | https://coldcraft.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-1b967209_inspection_2026-11-02T05-54-28-603Z.jpg)

Suggested CSV line: `coldcraft.com,approve,yes,,,,`

## valleycomfortheatingandair.com

| | |
|---|---|
| Website | https://valleycomfortheatingandair.com/ |
| Search title | Valley Comfort Heating & Air |
| Found by query | osm:craft=hvac |
| Contact page | https://valleycomfortheatingandair.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-277cb3c6_inspection_2026-11-02T05-54-59-735Z.jpg)

Suggested CSV line: `valleycomfortheatingandair.com,approve,yes,,,,`

## comfortsystemsllc.com

| | |
|---|---|
| Website | https://comfortsystemsllc.com/ |
| Search title | Comfort Systems of York County, LLC |
| Found by query | osm:craft=hvac |
| Contact page | https://comfortsystemsllc.com/about/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required dropdown "How may we help you?" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-55f0ad10_inspection_2026-11-02T05-55-51-644Z.jpg)

Suggested CSV line: `comfortsystemsllc.com,approve,yes,,,,`

## adamspower.com

| | |
|---|---|
| Website | https://adamspower.com/ |
| Search title | Adams |
| Found by query | osm:craft=hvac |
| Contact page | https://www.teamadams.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last name*": set sender lastName in campaign.json to allow this form
Review: Required address field "Service Address *": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code *": set sender zip in campaign.json to allow this form
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-ef16e571_inspection_2026-11-02T05-56-33-555Z.jpg)

Suggested CSV line: `adamspower.com,approve,yes,,,,`

## vanderfordair.com

| | |
|---|---|
| Website | https://www.vanderfordair.com/ |
| Search title | Vanderford Air, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.vanderfordair.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-e8f49c3e_inspection_2026-11-02T05-57-10-036Z.jpg)

Suggested CSV line: `vanderfordair.com,approve,yes,,,,`

## betterairsystems.net

| | |
|---|---|
| Website | http://www.betterairsystems.net/ |
| Search title | Better Air Systems |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `betterairsystems.net,approve,yes,,,,`

## serviceexperts.com

| | |
|---|---|
| Website | https://www.serviceexperts.com/ |
| Search title | Service Experts |
| Found by query | osm:craft=hvac |
| Contact page | https://www.serviceexperts.com/?\_\_cf\_chl\_rt\_tk=ZlMuPz3KIM\_mpvbhoKzVb9.N0j\_1dYsw2g8i3d2EExE-1793598727-1.0.1.1-M0.KkTM3tf4VPYQzt7m2f5CfiXIiDKtSpTyJRlzvPe4 |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-b7466ea5_inspection_2026-11-02T05-52-07-240Z.jpg)

Suggested CSV line: `serviceexperts.com,approve,yes,,,,`

## colliflower.com

| | |
|---|---|
| Website | https://www.colliflower.com/ |
| Search title | Colliflower Hose & Fittings |
| Found by query | osm:craft=hvac |
| Contact page | https://www.colliflower.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-e0039735_inspection_2026-11-02T05-52-51-233Z.jpg)

Suggested CSV line: `colliflower.com,approve,yes,,,,`

## servicefirstactx.com

| | |
|---|---|
| Website | https://www.servicefirstactx.com/ |
| Search title | Service First AC Repair & Plumbing |
| Found by query | osm:craft=hvac |
| Contact page | https://www.servicefirstactx.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name(Required)": set sender lastName in campaign.json to allow this form
Review: Required field "Preferred Appointment(Required)" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-2225ab7f_inspection_2026-11-02T05-53-35-905Z.jpg)

Suggested CSV line: `servicefirstactx.com,approve,yes,,,,`

## hallerent.com

| | |
|---|---|
| Website | https://www.hallerent.com/ |
| Search title | Haller Enterprises, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.hallerent.com/?ki-cf-botcl=1&\_\_cf\_chl\_rt\_tk=c1JnDm4uFgq2lA7JYCk3Cx9hshISEO0z\_rn0ZyfiJCI-1793598823-1.0.1.1-kRmz9nAqMTgcjM3gEnJoBBbnjVR3mXFiQybQ8lptkEg |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-7611a676_inspection_2026-11-02T05-53-43-906Z.jpg)

Suggested CSV line: `hallerent.com,approve,yes,,,,`

## breathehealthierair.com

| | |
|---|---|
| Website | https://www.breathehealthierair.com/ |
| Search title | Breathe Healthier Air |
| Found by query | osm:craft=hvac |
| Contact page | https://breathehealthierair.com/request-estimate/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-aac23267_inspection_2026-11-02T05-53-25-477Z.jpg)

Suggested CSV line: `breathehealthierair.com,approve,yes,,,,`

## sundanceenergy.com

| | |
|---|---|
| Website | https://sundanceenergy.com/ |
| Search title | Sundance Energy Services |
| Found by query | osm:craft=hvac |
| Contact page | https://www.sundanceenergy.com/?\_\_cf\_chl\_rt\_tk=48k2N28DV0O21mb3oIbQwaWQ6wpMOHoz1uBlyMQ21DU-1793598929-1.0.1.1-6MDtqmbH1S4JtfMGJ3Yk3u2vfkwgY7lXY9DlAIiYlR4 |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-cded9d0d_inspection_2026-11-02T05-55-29-964Z.jpg)

Suggested CSV line: `sundanceenergy.com,approve,yes,,,,`

## robertsmechanical.com

| | |
|---|---|
| Website | https://www.robertsmechanical.com/ |
| Search title | Roberts Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | https://www.robertsmechanical.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-5570a9a3_inspection_2026-11-02T05-56-12-313Z.jpg)

Suggested CSV line: `robertsmechanical.com,approve,yes,,,,`

## coolblew.com

| | |
|---|---|
| Website | https://coolblew.com/ |
| Search title | Cool Blew, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://coolblew.com/contact-us/schedule/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-3ef25610_inspection_2026-11-02T05-55-43-988Z.jpg)

Suggested CSV line: `coolblew.com,approve,yes,,,,`

## buildingefficiency.net

| | |
|---|---|
| Website | https://buildingefficiency.net/ |
| Search title | Building Efficiency, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://buildingefficiency.net/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No message field detected
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-7f2beb77_inspection_2026-11-02T05-54-41-623Z.jpg)

Suggested CSV line: `buildingefficiency.net,approve,yes,,,,`

## calwestair.com

| | |
|---|---|
| Website | https://www.calwestair.com/ |
| Search title | Cal-West Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://calwestair.com/
~~~

Suggested CSV line: `calwestair.com,approve,yes,,,,`

## valleymechanical.com

| | |
|---|---|
| Website | https://www.valleymechanical.com/ |
| Search title | Valley Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | https://valleymechanical.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-aebfa671_inspection_2026-11-02T05-56-05-879Z.jpg)

Suggested CSV line: `valleymechanical.com,approve,yes,,,,`

## isaacheating.com

| | |
|---|---|
| Website | https://www.isaacheating.com/ |
| Search title | Isaac Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.isaacheating.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is newsletter
Review: Required last name field "LAST NAME*": set sender lastName in campaign.json to allow this form
Review: Required dropdown "LOCATION*" has no truthful option
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-9db1bff1_inspection_2026-11-02T05-57-18-140Z.jpg)

Suggested CSV line: `isaacheating.com,approve,yes,,,,`

## arctichvacservices.com

| | |
|---|---|
| Website | https://www.arctichvacservices.com/ |
| Search title | Arctic HVAC Services |
| Found by query | osm:craft=hvac |
| Contact page | https://arctichvacservices.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-25e4c20d_inspection_2026-11-02T05-51-50-043Z.jpg)

Suggested CSV line: `arctichvacservices.com,approve,yes,,,,`

## valuableacheating.com

| | |
|---|---|
| Website | https://www.valuableacheating.com/ |
| Search title | Valuable AC & Heating LLC |
| Found by query | osm:craft=hvac |
| Contact page | https://www.valuableacheating.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-556800a1_inspection_2026-11-02T05-51-57-385Z.jpg)

Suggested CSV line: `valuableacheating.com,approve,yes,,,,`

## premierindoor.com

| | |
|---|---|
| Website | https://www.premierindoor.com/ |
| Search title | Premier Indoor Comfort Systems LLC |
| Found by query | osm:craft=hvac |
| Contact page | https://www.premierindoor.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-4c8d2b9a_inspection_2026-11-02T05-56-57-351Z.jpg)

Suggested CSV line: `premierindoor.com,approve,yes,,,,`

## goldenrulephc.com

| | |
|---|---|
| Website | https://www.goldenrulephc.com/ |
| Search title | Golden Rule Plumbing, Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://goldenrulephc.com/about/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-e4c55c91_inspection_2026-11-02T05-56-47-604Z.jpg)

Suggested CSV line: `goldenrulephc.com,approve,yes,,,,`

## servicekingtoday.com

| | |
|---|---|
| Website | https://www.servicekingtoday.com/ |
| Search title | Service King Plumbing & HVAC |
| Found by query | osm:craft=hvac |
| Contact page | https://www.servicekingtoday.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-1ab96a89_inspection_2026-11-02T05-55-12-230Z.jpg)

Suggested CSV line: `servicekingtoday.com,approve,yes,,,,`

## mrcool4ac.com

| | |
|---|---|
| Website | https://www.mrcool4ac.com/ |
| Search title | Donald P. Dick Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.mrcool4ac.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "Your Address *": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-7f08ddd4_inspection_2026-11-02T05-54-52-511Z.jpg)

Suggested CSV line: `mrcool4ac.com,approve,yes,,,,`

## dynamichvac.net

| | |
|---|---|
| Website | https://www.dynamichvac.net/ |
| Search title | Dynamic Mechanical Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.dynamichvac.net/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-52dd605a_inspection_2026-11-02T05-53-59-970Z.jpg)

Suggested CSV line: `dynamichvac.net,approve,yes,,,,`

## heatingcoolingchicagoland.com

| | |
|---|---|
| Website | https://www.heatingcoolingchicagoland.com/ |
| Search title | Malek Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.goservicemax.com/contact/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-36a07db9_inspection_2026-11-02T06-03-57-184Z.jpg)

Suggested CSV line: `heatingcoolingchicagoland.com,approve,yes,,,,`

## budmatthews.com

| | |
|---|---|
| Website | https://www.budmatthews.com/ |
| Search title | Bud Matthews Services |
| Found by query | osm:craft=hvac |
| Contact page | https://budmatthews.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last Name
*": set sender lastName in campaign.json to allow this form
Review: Required dropdown "What type of service do you need?
*" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-76ec9a2e_inspection_2026-11-02T05-57-50-144Z.jpg)

Suggested CSV line: `budmatthews.com,approve,yes,,,,`

## roadrunnerairconditioning.com

| | |
|---|---|
| Website | https://www.roadrunnerairconditioning.com/ |
| Search title | Roadrunner Air Conditioning, Heating & Refrigeration |
| Found by query | osm:craft=hvac |
| Contact page | https://www.roadrunnerairconditioning.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Are you a new customer?" has no truthful option
Review: Required dropdown "Which service do you want to schedule?" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-b21a798d_inspection_2026-11-02T06-01-59-066Z.jpg)

Suggested CSV line: `roadrunnerairconditioning.com,approve,yes,,,,`

## iairservices.com

| | |
|---|---|
| Website | https://www.iairservices.com/ |
| Search title | Intelligent Air Services |
| Found by query | osm:craft=hvac |
| Contact page | https://www.iairservices.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required dropdown "How Can We Help *" has no truthful option
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-421a5811_inspection_2026-11-02T06-05-43-988Z.jpg)

Suggested CSV line: `iairservices.com,approve,yes,,,,`

## mydadcandothat.com

| | |
|---|---|
| Website | https://mydadcandothat.com/ |
| Search title | Advanced Home Services |
| Found by query | osm:craft=hvac |
| Contact page | https://calladvancedhomeservices.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-40b12ff8_inspection_2026-11-02T06-04-25-830Z.jpg)

Suggested CSV line: `mydadcandothat.com,approve,yes,,,,`

## cleanaircomfort.com

| | |
|---|---|
| Website | https://www.cleanaircomfort.com/ |
| Search title | Russell & Abbott |
| Found by query | osm:craft=hvac |
| Contact page | https://www.phoenixhomecomfort.com/contact-phoenix-hvac |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-27a11583_inspection_2026-11-02T06-00-04-807Z.jpg)

Suggested CSV line: `cleanaircomfort.com,approve,yes,,,,`

## kwikplumbers.com

| | |
|---|---|
| Website | https://www.kwikplumbers.com/ |
| Search title | Kwik Plumbers |
| Found by query | osm:craft=hvac |
| Contact page | https://www.kwikplumbers.com/contact/request-estimate/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "your-address": set sender address in campaign.json to allow this form
Review: Required dropdown "State*
—Please choose an option—
Alabama
Alaska
Arizona
Arkansas
California
Colorado
Connecticut
Delaware
Florida
Georgia
Hawaii
Idaho
Illinois
Indiana
Iowa
Kansas
Kentucky
Louisiana
Maine
Maryland
Massachusetts
Michigan
Minnesota
Mississippi
Missouri
Montana
Nebraska
Nevada
New Hampshire
New Jersey" has no truthful option
Review: Required zip field "your-zip": set sender zip in campaign.json to allow this form
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-4c7670b2_inspection_2026-11-02T05-59-29-259Z.jpg)

Suggested CSV line: `kwikplumbers.com,approve,yes,,,,`

## robbinshvaconline.com

| | |
|---|---|
| Website | https://www.robbinshvaconline.com/ |
| Search title | Robbins Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.robbinshvaconline.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name(Required)": set sender lastName in campaign.json to allow this form
Review: Required field "Preferred Appointment(Required)" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-11b87c33_inspection_2026-11-02T06-02-20-019Z.jpg)

Suggested CSV line: `robbinshvaconline.com,approve,yes,,,,`

## idealservicesonline.com

| | |
|---|---|
| Website | https://www.idealservicesonline.com/ |
| Search title | Ideal Services Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://idealservicesonline.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-95c9d629_inspection_2026-11-02T06-03-14-697Z.jpg)

Suggested CSV line: `idealservicesonline.com,approve,yes,,,,`

## frostac.com

| | |
|---|---|
| Website | https://www.frostac.com/ |
| Search title | Frost Brothers Heating & Air |
| Found by query | osm:craft=hvac |
| Contact page | https://frostac.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-f732cc7a_inspection_2026-11-02T06-03-29-505Z.jpg)

Suggested CSV line: `frostac.com,approve,yes,,,,`

## leehvac.com

| | |
|---|---|
| Website | https://leehvac.com/ |
| Search title | Lee Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://leehvac.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-e0e9ff0a_inspection_2026-11-02T06-04-13-115Z.jpg)

Suggested CSV line: `leehvac.com,approve,yes,,,,`

## airsourceamerica.com

| | |
|---|---|
| Website | https://www.airsourceamerica.com/ |
| Search title | Air Source America |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `airsourceamerica.com,approve,yes,,,,`

## iernaair.com

| | |
|---|---|
| Website | https://www.iernaair.com/ |
| Search title | IERNA's Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.iernaair.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-6a3dd5f1_inspection_2026-11-02T05-58-37-772Z.jpg)

Suggested CSV line: `iernaair.com,approve,yes,,,,`

## dbheatingandcooling.com

| | |
|---|---|
| Website | https://www.dbheatingandcooling.com/ |
| Search title | DB Heating & Cooling, Inc |
| Found by query | osm:craft=hvac |
| Contact page | https://www.dbheatingandcooling.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-930de141_inspection_2026-11-02T05-58-51-252Z.jpg)

Suggested CSV line: `dbheatingandcooling.com,approve,yes,,,,`

## mvpelectric.com

| | |
|---|---|
| Website | https://www.mvpelectric.com/ |
| Search title | MVP Electric, Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.mvpelectric.com/lander |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-0d75ce9d_inspection_2026-11-02T05-59-08-820Z.jpg)

Suggested CSV line: `mvpelectric.com,approve,yes,,,,`

## robbinsheating.com

| | |
|---|---|
| Website | https://www.robbinsheating.com/ |
| Search title | Robbins Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.robbinsheating.com/contact/request-estimate\#content |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-c5e8d975_inspection_2026-11-02T05-59-16-904Z.jpg)

Suggested CSV line: `robbinsheating.com,approve,yes,,,,`

## celcoct.com

| | |
|---|---|
| Website | https://www.celcoct.com/ |
| Search title | Celco Heating and Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://celcoct.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: Required dropdown "How did you hear about us?*" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-333c124f_inspection_2026-11-02T05-59-45-968Z.jpg)

Suggested CSV line: `celcoct.com,approve,yes,,,,`

## southairinc.com

| | |
|---|---|
| Website | http://www.southairinc.com/ |
| Search title | South Air Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://southairinc.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-3c5fc59b_inspection_2026-11-02T06-00-12-492Z.jpg)

Suggested CSV line: `southairinc.com,approve,yes,,,,`

## comfortzone.cool

| | |
|---|---|
| Website | https://comfortzone.cool/ |
| Search title | Comfort Zone Heating Cooling Plumbing |
| Found by query | osm:craft=hvac |
| Contact page | https://www.comfortzone.cool/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: No message field detected
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-27fe2838_inspection_2026-11-02T06-01-42-191Z.jpg)

Suggested CSV line: `comfortzone.cool,approve,yes,,,,`

## koolbreeze.com

| | |
|---|---|
| Website | https://www.koolbreeze.com/ |
| Search title | Kool Breeze of Northwest Florida, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.koolbreeze.com/contact/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-b6d74130_inspection_2026-11-02T06-01-50-025Z.jpg)

Suggested CSV line: `koolbreeze.com,approve,yes,,,,`

## wmhendersoninc.com

| | |
|---|---|
| Website | https://www.wmhendersoninc.com/ |
| Search title | Wm. Henderson Plumbing & Heating Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.wmhendersoninc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-57ce5479_inspection_2026-11-02T06-02-40-593Z.jpg)

Suggested CSV line: `wmhendersoninc.com,approve,yes,,,,`

## shellabyair.com

| | |
|---|---|
| Website | https://www.shellabyair.com/ |
| Search title | Shellaby A/C & Refrigeration |
| Found by query | osm:craft=hvac |
| Contact page | https://shellabyair.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Review: Required dropdown "Service needed
Select a service
HVAC system installation
Air conditioning repair
Air conditioner replacement
Emergency HVAC service
HVAC maintenance" has no truthful option
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-327101c0_inspection_2026-11-02T06-02-50-697Z.jpg)

Suggested CSV line: `shellabyair.com,approve,yes,,,,`

## southeastairheat.com

| | |
|---|---|
| Website | https://www.southeastairheat.com/ |
| Search title | Florala LLC. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.southeastairheat.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-30f523e2_inspection_2026-11-02T06-03-38-458Z.jpg)

Suggested CSV line: `southeastairheat.com,approve,yes,,,,`

## fixac.com

| | |
|---|---|
| Website | https://www.fixac.com/ |
| Search title | PRK Services, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://fixac.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-9b4c68fe_inspection_2026-11-02T06-04-38-050Z.jpg)

Suggested CSV line: `fixac.com,approve,yes,,,,`

## paradiseair.net

| | |
|---|---|
| Website | http://www.paradiseair.net/ |
| Search title | Paradise Air |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `paradiseair.net,approve,yes,,,,`

## atyourserviceutah.com

| | |
|---|---|
| Website | https://www.atyourserviceutah.com/ |
| Search title | At Your Service Plumbing, Heating & Air |
| Found by query | osm:craft=hvac |
| Contact page | https://atyourserviceutah.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Name": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-3caa3638_inspection_2026-11-02T06-05-13-081Z.jpg)

Suggested CSV line: `atyourserviceutah.com,approve,yes,,,,`

## douglascoolingandheating.com

| | |
|---|---|
| Website | https://www.douglascoolingandheating.com/ |
| Search title | Douglas Cooling & Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://www.douglascoolingandheating.com/contact/schedule-estimate/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Review: Required last name field "last-name": set sender lastName in campaign.json to allow this form
Review: Required address field "address": set sender address in campaign.json to allow this form
Review: Required dropdown "state" has no truthful option
Review: Required zip field "zip": set sender zip in campaign.json to allow this form
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-daff01fc_inspection_2026-11-02T06-05-55-610Z.jpg)

Suggested CSV line: `douglascoolingandheating.com,approve,yes,,,,`

## expresshvacservice.com

| | |
|---|---|
| Website | https://www.expresshvacservice.com/ |
| Search title | Express HVAC Service |
| Found by query | osm:craft=hvac |
| Contact page | https://www.expresshvacservice.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-648374f9_inspection_2026-11-02T06-06-12-491Z.jpg)

Suggested CSV line: `expresshvacservice.com,approve,yes,,,,`

## riteway-sa.com

| | |
|---|---|
| Website | https://www.riteway-sa.com/ |
| Search title | Riteway Service Company |
| Found by query | osm:craft=hvac |
| Contact page | https://www.riteway-sa.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-97f5f4b9_inspection_2026-11-02T05-58-19-032Z.jpg)

Suggested CSV line: `riteway-sa.com,approve,yes,,,,`

## touchstoneheatingonline.com

| | |
|---|---|
| Website | https://www.touchstoneheatingonline.com/ |
| Search title | Touchstone Heating & Air Inc |
| Found by query | osm:craft=hvac |
| Contact page | https://www.touchstoneheatingonline.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-94a7e170_inspection_2026-11-02T05-59-37-629Z.jpg)

Suggested CSV line: `touchstoneheatingonline.com,approve,yes,,,,`

## speedyacservice.com

| | |
|---|---|
| Website | https://www.speedyacservice.com/ |
| Search title | Speedy Air Conditioning Service |
| Found by query | osm:craft=hvac |
| Contact page | https://www.speedyacservice.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No message field detected
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-042b11b5_inspection_2026-11-02T05-59-55-315Z.jpg)

Suggested CSV line: `speedyacservice.com,approve,yes,,,,`

## accur-ac.com

| | |
|---|---|
| Website | http://www.accur-ac.com/ |
| Search title | Accur-AC |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `accur-ac.com,approve,yes,,,,`

## jcmechanicalinc.com

| | |
|---|---|
| Website | https://www.jcmechanicalinc.com/ |
| Search title | JC Mechanical Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.jcmechanicalinc.com/lander |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-bd208870_inspection_2026-11-02T06-00-35-247Z.jpg)

Suggested CSV line: `jcmechanicalinc.com,approve,yes,,,,`

## duallheating.com

| | |
|---|---|
| Website | https://www.duallheating.com/ |
| Search title | DuAll Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.duallheating.com/contact/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-bc148cce_inspection_2026-11-02T06-00-43-864Z.jpg)

Suggested CSV line: `duallheating.com,approve,yes,,,,`

## expertairco.com

| | |
|---|---|
| Website | https://www.expertairco.com/ |
| Search title | Expert Air Cooling And Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://expertairco.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-5a49b24d_inspection_2026-11-02T05-57-30-561Z.jpg)

Suggested CSV line: `expertairco.com,approve,yes,,,,`

## raleighheatingandair.com

| | |
|---|---|
| Website | https://www.raleighheatingandair.com/ |
| Search title | Raleigh Heating & Air, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://raleighheatingandair.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-beb69d31_inspection_2026-11-02T05-57-41-892Z.jpg)

Suggested CSV line: `raleighheatingandair.com,approve,yes,,,,`

## aceairconditioningheating.com

| | |
|---|---|
| Website | https://www.aceairconditioningheating.com/ |
| Search title | Ace Air, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `aceairconditioningheating.com,approve,yes,,,,`

## jerseycityair.com

| | |
|---|---|
| Website | http://jerseycityair.com/ |
| Search title | Jersey City Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `jerseycityair.com,approve,yes,,,,`

## bobhvac.com

| | |
|---|---|
| Website | https://www.bobhvac.com/ |
| Search title | Bob Boldt HVAC |
| Found by query | osm:craft=hvac |
| Contact page | https://www.bobhvac.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Review: Required dropdown "Type of Inquiry" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-fee158c5_inspection_2026-11-02T06-01-13-447Z.jpg)

Suggested CSV line: `bobhvac.com,approve,yes,,,,`

## westernheatingair.com

| | |
|---|---|
| Website | https://westernheatingair.com/ |
| Search title | Western Heating, Air & Plumbing |
| Found by query | osm:craft=hvac |
| Contact page | https://westernheatingair.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-9dea66de_inspection_2026-11-02T06-01-23-696Z.jpg)

Suggested CSV line: `westernheatingair.com,approve,yes,,,,`

## davisonheating.com

| | |
|---|---|
| Website | https://davisonheating.com/ |
| Search title | Davison Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://davisonheating.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Service Needed" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-1d5799af_inspection_2026-11-02T06-02-08-553Z.jpg)

Suggested CSV line: `davisonheating.com,approve,yes,,,,`

## comfyhvac.com

| | |
|---|---|
| Website | https://www.comfyhvac.com/ |
| Search title | Comfy Heating & Air Conditioning Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.comfyhvac.com/contact/send-message/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-11e00744_inspection_2026-11-02T06-03-01-255Z.jpg)

Suggested CSV line: `comfyhvac.com,approve,yes,,,,`

## blytheheating.com

| | |
|---|---|
| Website | https://blytheheating.com/ |
| Search title | Blythe Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.blytheheating.com/contact.php |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-77b7e141_inspection_2026-11-02T06-10-48-332Z.jpg)

Suggested CSV line: `blytheheating.com,approve,yes,,,,`

## certifiedairsystemsinc.com

| | |
|---|---|
| Website | https://www.certifiedairsystemsinc.com/ |
| Search title | Certified Air Systems, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.certifiedairsystemsinc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-26c5dd52_inspection_2026-11-02T06-09-49-462Z.jpg)

Suggested CSV line: `certifiedairsystemsinc.com,approve,yes,,,,`

## cowboysac.com

| | |
|---|---|
| Website | https://www.cowboysac.com/ |
| Search title | Cowboys Air Conditioning & Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://cowboysac.com/contact.html |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-651ba4fc_inspection_2026-11-02T06-10-19-586Z.jpg)

Suggested CSV line: `cowboysac.com,approve,yes,,,,`

## astroairinc.com

| | |
|---|---|
| Website | https://www.astroairinc.com/ |
| Search title | Astro Air Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://astroairinc.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-7442e5f2_inspection_2026-11-02T06-11-44-864Z.jpg)

Suggested CSV line: `astroairinc.com,approve,yes,,,,`

## hallsair.com

| | |
|---|---|
| Website | https://www.hallsair.com/ |
| Search title | Hall's Heating, Air Conditioning & Refrigeration |
| Found by query | osm:craft=hvac |
| Contact page | https://www.hallsair.com/contact/send-message |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-53a1b81b_inspection_2026-11-02T06-13-21-138Z.jpg)

Suggested CSV line: `hallsair.com,approve,yes,,,,`

## basnettplumbing.com

| | |
|---|---|
| Website | https://www.basnettplumbing.com/ |
| Search title | Basnett Plumbing & Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://www.basnettplumbing.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required dropdown "State" has no truthful option
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-884145be_inspection_2026-11-02T06-13-32-313Z.jpg)

Suggested CSV line: `basnettplumbing.com,approve,yes,,,,`

## freshairinc.com

| | |
|---|---|
| Website | https://www.freshairinc.com/ |
| Search title | Fresh Air, L.P. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.freshairinc.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-a1b13f1f_inspection_2026-11-02T06-07-13-999Z.jpg)

Suggested CSV line: `freshairinc.com,approve,yes,,,,`

## fortcollinsheating.com

| | |
|---|---|
| Website | https://www.fortcollinsheating.com/ |
| Search title | Fort Collins Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://fortcollinsheating.com/contact/get-a-call-back/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required address field "Address *": set sender address in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-efdf27c3_inspection_2026-11-02T06-08-07-384Z.jpg)

Suggested CSV line: `fortcollinsheating.com,approve,yes,,,,`

## totalcomfortinc.net

| | |
|---|---|
| Website | https://www.totalcomfortinc.net/ |
| Search title | Total Comfort, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://totalcomfortinc.net/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-e22ef78d_inspection_2026-11-02T06-09-04-062Z.jpg)

Suggested CSV line: `totalcomfortinc.net,approve,yes,,,,`

## coolingunlimited.com

| | |
|---|---|
| Website | https://www.coolingunlimited.com/ |
| Search title | Cooling Unlimited, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.coolingunlimited.com/contact/message\#content |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-3a7038e9_inspection_2026-11-02T06-09-40-844Z.jpg)

Suggested CSV line: `coolingunlimited.com,approve,yes,,,,`

## apcplumbing.com

| | |
|---|---|
| Website | https://www.apcplumbing.com/ |
| Search title | APC Plumbing & Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://www.apcplumbing.com/?\_\_cf\_chl\_rt\_tk=.rc46p8nmkfYO3.1xxVxF\_gykt8A03i\_lKOsNasO76Y-1793599796-1.0.1.1-jyDw6iexf29Zit9H4jVo.NTyunhvnePmYvV42ekxfJw |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-130c9cf9_inspection_2026-11-02T06-09-56-479Z.jpg)

Suggested CSV line: `apcplumbing.com,approve,yes,,,,`

## callbrilliant.com

| | |
|---|---|
| Website | https://callbrilliant.com/ |
| Search title | Brilliant Electric Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://callbrilliant.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required dropdown "What kind of service do you need?" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-557d16f9_inspection_2026-11-02T06-10-10-948Z.jpg)

Suggested CSV line: `callbrilliant.com,approve,yes,,,,`

## agair.com

| | |
|---|---|
| Website | https://www.agair.com/ |
| Search title | AG Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://agair.com/
~~~

Suggested CSV line: `agair.com,approve,yes,,,,`

## shawsacandheating.com

| | |
|---|---|
| Website | https://www.shawsacandheating.com/ |
| Search title | Shaw's Air Conditioning & Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://www.shawsacandheating.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-50a2b80b_inspection_2026-11-02T06-11-22-997Z.jpg)

Suggested CSV line: `shawsacandheating.com,approve,yes,,,,`

## westlandhvac.com

| | |
|---|---|
| Website | https://www.westlandhvac.com/ |
| Search title | Westland Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: Timeout 30000ms exceeded.
~~~

Suggested CSV line: `westlandhvac.com,approve,yes,,,,`

## hhrheatingandcooling.com

| | |
|---|---|
| Website | http://www.hhrheatingandcooling.com/ |
| Search title | HHR Enterprises Heating & Cooling Solutions |
| Found by query | osm:craft=hvac |
| Contact page | https://www.hhrheatingandcooling.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-d231450e_inspection_2026-11-02T06-13-02-812Z.jpg)

Suggested CSV line: `hhrheatingandcooling.com,approve,yes,,,,`

## butterplumbing.com

| | |
|---|---|
| Website | https://www.butterplumbing.com/ |
| Search title | Butter Plumbing |
| Found by query | osm:craft=hvac |
| Contact page | https://butterplumbing.com/contact-butter-plumbing/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-6da3a690_inspection_2026-11-02T06-13-54-532Z.jpg)

Suggested CSV line: `butterplumbing.com,approve,yes,,,,`

## schneidersacandheating.com

| | |
|---|---|
| Website | https://www.schneidersacandheating.com/ |
| Search title | Schneider's AC & Heating |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `schneidersacandheating.com,approve,yes,,,,`

## airondemand.com

| | |
|---|---|
| Website | https://www.airondemand.com/ |
| Search title | Air On Demand |
| Found by query | osm:craft=hvac |
| Contact page | https://www.airondemand.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-8e14f0a1_inspection_2026-11-02T06-14-16-646Z.jpg)

Suggested CSV line: `airondemand.com,approve,yes,,,,`

## conditionedairservice.com

| | |
|---|---|
| Website | https://www.conditionedairservice.com/ |
| Search title | Conditioned Air Services |
| Found by query | osm:craft=hvac |
| Contact page | https://conditionedairservice.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-3b852aa0_inspection_2026-11-02T06-14-57-508Z.jpg)

Suggested CSV line: `conditionedairservice.com,approve,yes,,,,`

## as1air.com

| | |
|---|---|
| Website | https://as1air.com/ |
| Search title | Air Source 1 Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `as1air.com,approve,yes,,,,`

## southfloridamarineairconditioning.com

| | |
|---|---|
| Website | http://southfloridamarineairconditioning.com/ |
| Search title | South Florida Marine Air Conditioning & Refrigeration |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `southfloridamarineairconditioning.com,approve,yes,,,,`

## additheating.com

| | |
|---|---|
| Website | https://additheating.com/ |
| Search title | Addit Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://additheating.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-bf298188_inspection_2026-11-02T06-07-05-299Z.jpg)

Suggested CSV line: `additheating.com,approve,yes,,,,`

## royalflushmd.com

| | |
|---|---|
| Website | http://royalflushmd.com/ |
| Search title | Royal Flush |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `royalflushmd.com,approve,yes,,,,`

## atlanticrefrigeration.com

| | |
|---|---|
| Website | https://atlanticrefrigeration.com/ |
| Search title | Atlantic Refrigeration & Air Conditioning, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.atlanticrefrigeration.com/contact/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-d74c1606_inspection_2026-11-02T06-08-45-332Z.jpg)

Suggested CSV line: `atlanticrefrigeration.com,approve,yes,,,,`

## dandchvac.com

| | |
|---|---|
| Website | http://www.dandchvac.com/ |
| Search title | D and C HVAC, LLC |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `dandchvac.com,approve,yes,,,,`

## hihomecomfort.com

| | |
|---|---|
| Website | https://www.hihomecomfort.com/ |
| Search title | H.I. Home Comfort |
| Found by query | osm:craft=hvac |
| Contact page | https://www.hihomecomfort.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-cad2af04_inspection_2026-11-02T06-10-56-885Z.jpg)

Suggested CSV line: `hihomecomfort.com,approve,yes,,,,`

## txace.com

| | |
|---|---|
| Website | https://txace.com/ |
| Search title | Texas Air Conditioning & Electric |
| Found by query | osm:craft=hvac |
| Contact page | https://txace.com/contact-us-about-us-hvac-company-east-texas/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "lname": set sender lastName in campaign.json to allow this form
Review: Required address field "address": set sender address in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-e102a100_inspection_2026-11-02T06-11-34-377Z.jpg)

Suggested CSV line: `txace.com,approve,yes,,,,`

## comfortsolutionsutah.com

| | |
|---|---|
| Website | https://www.comfortsolutionsutah.com/ |
| Search title | Comfort Solutions |
| Found by query | osm:craft=hvac |
| Contact page | https://www.comfortsolutionsutah.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-52c68e7e_inspection_2026-11-02T06-11-59-629Z.jpg)

Suggested CSV line: `comfortsolutionsutah.com,approve,yes,,,,`

## bethanyair.com

| | |
|---|---|
| Website | https://bethanyair.com/ |
| Search title | Bethany Air |
| Found by query | osm:craft=hvac |
| Contact page | https://bethanyair.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-5076aee6_inspection_2026-11-02T06-12-51-402Z.jpg)

Suggested CSV line: `bethanyair.com,approve,yes,,,,`

## accuratetemperatures.com

| | |
|---|---|
| Website | https://accuratetemperatures.com/ |
| Search title | Accurate Temperature |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website has a broken HTTPS certificate
~~~

Suggested CSV line: `accuratetemperatures.com,approve,yes,,,,`

## 863cooling.com

| | |
|---|---|
| Website | http://www.863cooling.com/ |
| Search title | Air Conditioning Experts, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `863cooling.com,approve,yes,,,,`

## shavitz.com

| | |
|---|---|
| Website | https://www.shavitz.com/ |
| Search title | Shavitz Heating and Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.shavitz.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-cdd97e69_inspection_2026-11-02T06-09-13-820Z.jpg)

Suggested CSV line: `shavitz.com,approve,yes,,,,`

## newcirclemechanical.net

| | |
|---|---|
| Website | http://newcirclemechanical.net/ |
| Search title | New Circle Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | https://www.newcirclemechanical.net/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is booking
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: No submit button detected
Form purpose: booking
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-374b1c76_inspection_2026-11-02T06-10-37-616Z.jpg)

Suggested CSV line: `newcirclemechanical.net,approve,yes,,,,`

## kilowatthvac.com

| | |
|---|---|
| Website | https://www.kilowatthvac.com/ |
| Search title | Kilowatt Heating, Air Conditioning and Electrical |
| Found by query | osm:craft=hvac |
| Contact page | https://www.kilowatthvac.com/get-in-touch/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last*": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address*": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP Code*": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-793c1eea_inspection_2026-11-02T06-13-12-455Z.jpg)

Suggested CSV line: `kilowatthvac.com,approve,yes,,,,`

## earlsheating.com

| | |
|---|---|
| Website | https://www.earlsheating.com/ |
| Search title | Earl's Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.earlsheating.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required address field "address": set sender address in campaign.json to allow this form
Review: Required field "how-hear-about" is not a standard field
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-a9320f9c_inspection_2026-11-02T06-06-33-586Z.jpg)

Suggested CSV line: `earlsheating.com,approve,yes,,,,`

## cincyheatingandcooling.net

| | |
|---|---|
| Website | http://cincyheatingandcooling.net/ |
| Search title | Cincy Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `cincyheatingandcooling.net,approve,yes,,,,`

## designcomfort.com

| | |
|---|---|
| Website | http://designcomfort.com/ |
| Search title | Design Comfort Co., Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.designcomfort.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Review: Required address field "Address Line 1
(required)": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP Code
(required)": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-9394800c_inspection_2026-11-02T06-08-25-097Z.jpg)

Suggested CSV line: `designcomfort.com,approve,yes,,,,`

## allproelectricalandac.com

| | |
|---|---|
| Website | https://www.allproelectricalandac.com/ |
| Search title | All-Pro Electrical & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.allproelectricalandac.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-8e9ae9b0_inspection_2026-11-02T06-06-24-977Z.jpg)

Suggested CSV line: `allproelectricalandac.com,approve,yes,,,,`

## marklindsayplumbing.com

| | |
|---|---|
| Website | https://www.marklindsayplumbing.com/ |
| Search title | Mark Lindsay and Son Plumbing & Heating Inc |
| Found by query | osm:craft=hvac |
| Contact page | https://www.marklindsayplumbing.com/contact-us/schedule-service/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required dropdown "Service Needed *" has no truthful option
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-e0e93d2b_inspection_2026-11-02T06-11-08-241Z.jpg)

Suggested CSV line: `marklindsayplumbing.com,approve,yes,,,,`

## worldclassheating.net

| | |
|---|---|
| Website | https://www.worldclassheating.net/ |
| Search title | World Class Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `worldclassheating.net,approve,yes,,,,`

## alphaaircorp.com

| | |
|---|---|
| Website | https://www.alphaaircorp.com/ |
| Search title | Alpha Air Corporation |
| Found by query | osm:craft=hvac |
| Contact page | https://www.alphaaircorp.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: No message field detected
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-62d07068_inspection_2026-11-02T06-15-13-936Z.jpg)

Suggested CSV line: `alphaaircorp.com,approve,yes,,,,`

## airconditioningexperts.net

| | |
|---|---|
| Website | http://www.airconditioningexperts.net/ |
| Search title | Air Conditioning Experts, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `airconditioningexperts.net,approve,yes,,,,`

## reynoldsairheat.com

| | |
|---|---|
| Website | https://reynoldsairheat.com/ |
| Search title | Reynolds Air & Heat |
| Found by query | osm:craft=hvac |
| Contact page | https://reynoldsairheat.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Required consent/terms checkbox — never accepted automatically
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/333084e8-b6ec-4b85-a8e5-af0b642ecf55/run-333084e8_candidate-6c6911ba_inspection_2026-11-02T06-15-26-845Z.jpg)

Suggested CSV line: `reynoldsairheat.com,approve,yes,,,,`

## hickenair.com

| | |
|---|---|
| Website | https://hickenair.com/ |
| Search title | Hicken Air |
| Found by query | osm:craft=hvac |
| Contact page | https://www.hickenair.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-803285da_inspection_2026-11-02T06-32-29-476Z.jpg)

Suggested CSV line: `hickenair.com,approve,yes,,,,`

## mbpheatingandair.info

| | |
|---|---|
| Website | http://mbpheatingandair.info/ |
| Search title | DFW HVAC and Plumbing LLC |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `mbpheatingandair.info,approve,yes,,,,`

## onesourceair.com

| | |
|---|---|
| Website | https://www.onesourceair.com/ |
| Search title | One Source Heating and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.onesourceair.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-429684c8_inspection_2026-11-02T06-31-40-216Z.jpg)

Suggested CSV line: `onesourceair.com,approve,yes,,,,`

## bestwaymechanicalservices.com

| | |
|---|---|
| Website | https://www.bestwaymechanicalservices.com/ |
| Search title | Bestway Mechanical Services |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `bestwaymechanicalservices.com,approve,yes,,,,`

## trane.com

| | |
|---|---|
| Website | https://www.trane.com/ |
| Search title | Trane Commercial Sales Office |
| Found by query | osm:craft=hvac |
| Contact page | https://www.trane.com/index.html |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-21ba853f_inspection_2026-11-02T06-35-31-490Z.jpg)

Suggested CSV line: `trane.com,approve,yes,,,,`

## comfortexperts.net

| | |
|---|---|
| Website | https://www.comfortexperts.net/ |
| Search title | Comfort Experts |
| Found by query | osm:craft=hvac |
| Contact page | https://www.comfortexperts.net/contact-1 |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-c8bf9cff_inspection_2026-11-02T06-33-48-660Z.jpg)

Suggested CSV line: `comfortexperts.net,approve,yes,,,,`

## breaultheatingandcooling.com

| | |
|---|---|
| Website | https://www.breaultheatingandcooling.com/ |
| Search title | Breault Heating and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `breaultheatingandcooling.com,approve,yes,,,,`

## fairconservicecompany.com

| | |
|---|---|
| Website | https://www.fairconservicecompany.com/ |
| Search title | Faircon Service Company |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website has a broken HTTPS certificate
~~~

Suggested CSV line: `fairconservicecompany.com,approve,yes,,,,`

## efficienttexas.com

| | |
|---|---|
| Website | https://efficienttexas.com/ |
| Search title | Efficent AC, Electric & Plumbing |
| Found by query | osm:craft=hvac |
| Contact page | https://efficienttexas.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is newsletter
Review: No message field detected
Form purpose: newsletter
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-5855eb70_inspection_2026-11-02T06-32-40-830Z.jpg)

Suggested CSV line: `efficienttexas.com,approve,yes,,,,`

## ackerheatcool.com

| | |
|---|---|
| Website | https://www.ackerheatcool.com/ |
| Search title | Acker Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.ackerheatcool.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-2f23c920_inspection_2026-11-02T06-32-18-654Z.jpg)

Suggested CSV line: `ackerheatcool.com,approve,yes,,,,`

## sceliaplumbingheating.com

| | |
|---|---|
| Website | http://sceliaplumbingheating.com/ |
| Search title | Victor Scelia Plumbing & Heating |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `sceliaplumbingheating.com,approve,yes,,,,`

## johnstonesupply.com

| | |
|---|---|
| Website | https://www.johnstonesupply.com/ |
| Search title | Johnstone Supply |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: robots.txt disallows automated access to the site
~~~

Suggested CSV line: `johnstonesupply.com,approve,yes,,,,`

## commercialservicecotx.com

| | |
|---|---|
| Website | http://commercialservicecotx.com/ |
| Search title | Commercial Service Co |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `commercialservicecotx.com,approve,yes,,,,`

## desousaoil.com

| | |
|---|---|
| Website | https://desousaoil.com/ |
| Search title | DeSousa Oil & Service |
| Found by query | osm:craft=hvac |
| Contact page | https://desousaoil.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-af015b8a_inspection_2026-11-02T06-38-41-073Z.jpg)

Suggested CSV line: `desousaoil.com,approve,yes,,,,`

## adjustableservices.com

| | |
|---|---|
| Website | https://www.adjustableservices.com/ |
| Search title | Adjustable Services |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://adjustableservices.com/
~~~

Suggested CSV line: `adjustableservices.com,approve,yes,,,,`

## tntrefrigeration.com

| | |
|---|---|
| Website | https://www.tntrefrigeration.com/ |
| Search title | TNT Refrigeration, LLC |
| Found by query | osm:craft=hvac |
| Contact page | https://tntrefrigeration.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-c0f0a323_inspection_2026-11-02T06-38-21-409Z.jpg)

Suggested CSV line: `tntrefrigeration.com,approve,yes,,,,`

## fergusonheatingandair.com

| | |
|---|---|
| Website | https://fergusonheatingandair.com/ |
| Search title | Ferguson Heating and Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://runwithreza.tv/about-reza/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-103bdc7a_inspection_2026-11-02T06-38-07-069Z.jpg)

Suggested CSV line: `fergusonheatingandair.com,approve,yes,,,,`

## elpasoperfectweather.com

| | |
|---|---|
| Website | https://elpasoperfectweather.com/ |
| Search title | Perfect Weather Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://elpasoperfectweather.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-dee6645b_inspection_2026-11-02T06-37-26-513Z.jpg)

Suggested CSV line: `elpasoperfectweather.com,approve,yes,,,,`

## beaufortairconditioning.com

| | |
|---|---|
| Website | https://www.beaufortairconditioning.com/ |
| Search title | Beaufort Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://beaufortairconditioning.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-98b34428_inspection_2026-11-02T06-37-16-828Z.jpg)

Suggested CSV line: `beaufortairconditioning.com,approve,yes,,,,`

## macklinhomeheating.com

| | |
|---|---|
| Website | http://www.macklinhomeheating.com/ |
| Search title | Macklin Mechanical Company |
| Found by query | osm:craft=hvac |
| Contact page | http://www.macklinhomeheating.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-2dcda514_inspection_2026-11-02T06-37-04-361Z.jpg)

Suggested CSV line: `macklinhomeheating.com,approve,yes,,,,`

## rycoinc.com

| | |
|---|---|
| Website | https://rycoinc.com/ |
| Search title | W.M. Ryan And Company |
| Found by query | osm:craft=hvac |
| Contact page | https://www.rycoinc.com/?\_\_cf\_chl\_rt\_tk=tDa76kXPv\_w0DxoCjIu5WkK42Vj.fPyvrboiWbvx6\_0-1793601083-1.0.1.1-IwLPw9D5fraosH6dgtfhBj4GViiza3kZCVYHEFajwXQ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-08231b58_inspection_2026-11-02T06-31-23-447Z.jpg)

Suggested CSV line: `rycoinc.com,approve,yes,,,,`

## carolinaairsystems.com

| | |
|---|---|
| Website | https://carolinaairsystems.com/ |
| Search title | Carolina Air Systems |
| Found by query | osm:craft=hvac |
| Contact page | https://www.carolinaairsystems.com/quote/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "Street": set sender address in campaign.json to allow this form
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-0e1c6b17_inspection_2026-11-02T06-38-54-052Z.jpg)

Suggested CSV line: `carolinaairsystems.com,approve,yes,,,,`

## southsidecontrol.com

| | |
|---|---|
| Website | http://www.southsidecontrol.com/ |
| Search title | South Side Control Supply Co. |
| Found by query | osm:craft=hvac |
| Contact page | http://www.southsidecontrol.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-f0e5a663_inspection_2026-11-02T06-37-42-586Z.jpg)

Suggested CSV line: `southsidecontrol.com,approve,yes,,,,`

## mmcomfortsystems.com

| | |
|---|---|
| Website | https://www.mmcomfortsystems.com/ |
| Search title | MM Comfort Systems |
| Found by query | osm:craft=hvac |
| Contact page | https://homecomfortalliance.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
BLOCKED: Form purpose is job application
Review: Required zip field "ZIP Code(Required)": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-6c28196b_inspection_2026-11-02T06-36-16-254Z.jpg)

Suggested CSV line: `mmcomfortsystems.com,approve,yes,,,,`

## kachinacooling.com

| | |
|---|---|
| Website | https://kachinacooling.com/ |
| Search title | Kachina Heating & Cooling LLC |
| Found by query | osm:craft=hvac |
| Contact page | https://kachinacooling.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-ee732af6_inspection_2026-11-02T06-35-57-427Z.jpg)

Suggested CSV line: `kachinacooling.com,approve,yes,,,,`

## glenmonthvac.com

| | |
|---|---|
| Website | https://www.glenmonthvac.com/ |
| Search title | Glenmont Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://glenmonthvac.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-421b2a6e_inspection_2026-11-02T06-35-10-939Z.jpg)

Suggested CSV line: `glenmonthvac.com,approve,yes,,,,`

## controlled-systems.com

| | |
|---|---|
| Website | http://controlled-systems.com/ |
| Search title | Controlled Systems HVAC Inc |
| Found by query | osm:craft=hvac |
| Contact page | https://www.controlled-systems.com/contact.html |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: No submit button detected
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-4f016f3c_inspection_2026-11-02T06-34-58-390Z.jpg)

Suggested CSV line: `controlled-systems.com,approve,yes,,,,`

## northcountryheatcool.com

| | |
|---|---|
| Website | http://northcountryheatcool.com/ |
| Search title | North Country Heat Air and Appliance Repair |
| Found by query | osm:craft=hvac |
| Contact page | https://northcountryhvac.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-a693404d_inspection_2026-11-02T06-34-49-320Z.jpg)

Suggested CSV line: `northcountryheatcool.com,approve,yes,,,,`

## loudbrothers.com

| | |
|---|---|
| Website | https://www.loudbrothers.com/ |
| Search title | Loud Brother's |
| Found by query | osm:craft=hvac |
| Contact page | https://www.loudbrothers.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required dropdown "interest" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-e8f273f1_inspection_2026-11-02T06-34-23-786Z.jpg)

Suggested CSV line: `loudbrothers.com,approve,yes,,,,`

## northraleighair.com

| | |
|---|---|
| Website | http://www.northraleighair.com/ |
| Search title | North Raleigh Air, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.northraleighair.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-6dd1dc6a_inspection_2026-11-02T06-34-11-899Z.jpg)

Suggested CSV line: `northraleighair.com,approve,yes,,,,`

## acheatdr.com

| | |
|---|---|
| Website | http://acheatdr.com/ |
| Search title | AC Heat Dr.com |
| Found by query | osm:craft=hvac |
| Contact page | http://acheatdr.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-c295987f_inspection_2026-11-02T06-34-00-012Z.jpg)

Suggested CSV line: `acheatdr.com,approve,yes,,,,`

## noblehvac.net

| | |
|---|---|
| Website | https://www.noblehvac.net/ |
| Search title | Noble Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `noblehvac.net,approve,yes,,,,`

## greenleafair.com

| | |
|---|---|
| Website | https://greenleafair.com/ |
| Search title | Green Leaf Air |
| Found by query | osm:craft=hvac |
| Contact page | https://greenleafair.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-ea12d767_inspection_2026-11-02T06-33-09-138Z.jpg)

Suggested CSV line: `greenleafair.com,approve,yes,,,,`

## dooleyshvac.com

| | |
|---|---|
| Website | https://dooleyshvac.com/ |
| Search title | Dooley's Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://dooleyshvac.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-d3eff0cf_inspection_2026-11-02T06-36-36-767Z.jpg)

Suggested CSV line: `dooleyshvac.com,approve,yes,,,,`

## skhnc.com

| | |
|---|---|
| Website | https://www.skhnc.com/ |
| Search title | SK Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.skhnc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-efd7ca4e_inspection_2026-11-02T06-35-50-544Z.jpg)

Suggested CSV line: `skhnc.com,approve,yes,,,,`

## aceairbyelliottservices.com

| | |
|---|---|
| Website | http://aceairbyelliottservices.com/ |
| Search title | Ace Air By Elliott Services |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `aceairbyelliottservices.com,approve,yes,,,,`

## williamsonair.com

| | |
|---|---|
| Website | https://www.williamsonair.com/ |
| Search title | Williamson Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.williamsonair.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-04041582_inspection_2026-11-02T06-33-39-913Z.jpg)

Suggested CSV line: `williamsonair.com,approve,yes,,,,`

## sunbeltheatandair.com

| | |
|---|---|
| Website | https://www.sunbeltheatandair.com/ |
| Search title | Sunbelt Heat & Air Services Inc |
| Found by query | osm:craft=hvac |
| Contact page | https://sunbeltheatandair.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-df0bdf90_inspection_2026-11-02T06-33-30-599Z.jpg)

Suggested CSV line: `sunbeltheatandair.com,approve,yes,,,,`

## sigcox.com

| | |
|---|---|
| Website | https://sigcox.com/ |
| Search title | Sig Cox Augusta Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://sigcox.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Service Address *": set sender address in campaign.json to allow this form
Review: Required field "Interested Service *" is not a standard field
Review: Required field "How Soon You Need the Service *" is not a standard field
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-3f7c7b3b_inspection_2026-11-02T06-36-55-831Z.jpg)

Suggested CSV line: `sigcox.com,approve,yes,,,,`

## haddixac.com

| | |
|---|---|
| Website | https://www.haddixac.com/ |
| Search title | Haddix AC Heating And Electrical LLC |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `haddixac.com,approve,yes,,,,`

## airproheatingcoolingga.com

| | |
|---|---|
| Website | https://www.airproheatingcoolingga.com/ |
| Search title | Air Pro Heating, Cooling, & Refrigeration |
| Found by query | osm:craft=hvac |
| Contact page | https://www.airproheatingcoolingga.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-4b77fe18_inspection_2026-11-02T06-31-55-141Z.jpg)

Suggested CSV line: `airproheatingcoolingga.com,approve,yes,,,,`

## rhoadsenergy.com

| | |
|---|---|
| Website | https://www.rhoadsenergy.com/ |
| Search title | Vincent R. Boltz |
| Found by query | osm:craft=hvac |
| Contact page | https://www.rhoadsenergy.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: Required dropdown "What service are your most interested in?*" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-7385721d_inspection_2026-11-02T06-39-04-614Z.jpg)

Suggested CSV line: `rhoadsenergy.com,approve,yes,,,,`

## centralheatingrefrigerationllc.com

| | |
|---|---|
| Website | https://www.centralheatingrefrigerationllc.com/ |
| Search title | Central Heating & Refrigeration LLC |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `centralheatingrefrigerationllc.com,approve,yes,,,,`

## greencityheatingandair.com

| | |
|---|---|
| Website | https://greencityheatingandair.com/ |
| Search title | Green City Heating and Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://greencityheatingandair.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-a8dcebb0_inspection_2026-11-02T06-33-02-724Z.jpg)

Suggested CSV line: `greencityheatingandair.com,approve,yes,,,,`

## totosheatingandcooling.com

| | |
|---|---|
| Website | https://www.totosheatingandcooling.com/ |
| Search title | Toto's Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.totosheatingandcooling.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-701134dd_inspection_2026-11-02T06-35-18-975Z.jpg)

Suggested CSV line: `totosheatingandcooling.com,approve,yes,,,,`

## bradcocoolingandheatingpa.com

| | |
|---|---|
| Website | https://www.bradcocoolingandheatingpa.com/ |
| Search title | Bradco Heating and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `bradcocoolingandheatingpa.com,approve,yes,,,,`

## financialdesigninsurance.com

| | |
|---|---|
| Website | https://www.financialdesigninsurance.com/ |
| Search title | Financial Design Insurance Agency |
| Found by query | osm:craft=hvac |
| Contact page | https://www.financialdesigninsurance.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: No message field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-a5921d7a_inspection_2026-11-02T06-43-26-332Z.jpg)

Suggested CSV line: `financialdesigninsurance.com,approve,yes,,,,`

## jenkinsheatingandair.com

| | |
|---|---|
| Website | https://jenkinsheatingandair.com/ |
| Search title | Jenkins Heating & Air |
| Found by query | osm:craft=hvac |
| Contact page | https://jenkinsheatingandair.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-4ba6f394_inspection_2026-11-02T06-42-18-774Z.jpg)

Suggested CSV line: `jenkinsheatingandair.com,approve,yes,,,,`

## foulksheatingandcooling.com

| | |
|---|---|
| Website | https://www.foulksheatingandcooling.com/ |
| Search title | Foulks Southern Air Heating and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://foulksheatingandcooling.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "input_10": set sender address in campaign.json to allow this form
Review: Required zip field "input_14": set sender zip in campaign.json to allow this form
Review: Required dropdown "input_16" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-abdb9ee1_inspection_2026-11-02T06-42-29-757Z.jpg)

Suggested CSV line: `foulksheatingandcooling.com,approve,yes,,,,`

## legacyhomecomfort.com

| | |
|---|---|
| Website | https://www.legacyhomecomfort.com/ |
| Search title | Legacy Home Comfort |
| Found by query | osm:craft=hvac |
| Contact page | https://www.legacyhomecomfort.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-d839c136_inspection_2026-11-02T06-40-17-457Z.jpg)

Suggested CSV line: `legacyhomecomfort.com,approve,yes,,,,`

## bellomyims.com

| | |
|---|---|
| Website | https://bellomyims.com/ |
| Search title | BIMS, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.bellomyims.com/schedule |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "*Last Name:": set sender lastName in campaign.json to allow this form
Review: No message field detected
Review: No submit button detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-2f7f688a_inspection_2026-11-02T06-40-56-673Z.jpg)

Suggested CSV line: `bellomyims.com,approve,yes,,,,`

## hghmechanical.com

| | |
|---|---|
| Website | https://hghmechanical.com/ |
| Search title | HGH Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | https://hghmechanical.com/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: Required zip field "Zip Code*": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-1fbcecd6_inspection_2026-11-02T06-39-31-665Z.jpg)

Suggested CSV line: `hghmechanical.com,approve,yes,,,,`

## homeservicenerds.net

| | |
|---|---|
| Website | https://homeservicenerds.net/ |
| Search title | Home Service Nerds HVAC, AC & Furnace Repair |
| Found by query | osm:craft=hvac |
| Contact page | https://homeservicenerds.net/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-593e60a5_inspection_2026-11-02T06-48-32-137Z.jpg)

Suggested CSV line: `homeservicenerds.net,approve,yes,,,,`

## stedfastcool.com

| | |
|---|---|
| Website | https://stedfastcool.com/ |
| Search title | Stedfast Heat & Air |
| Found by query | osm:craft=hvac |
| Contact page | https://stedfastcool.com/contact-stedfast-heat-air.php |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is booking
Review: Required field "8 - 2
Refresh" is not a standard field
Form purpose: booking
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-d5816f1a_inspection_2026-11-02T06-47-33-829Z.jpg)

Suggested CSV line: `stedfastcool.com,approve,yes,,,,`

## bobsheatandac.com

| | |
|---|---|
| Website | https://www.bobsheatandac.com/ |
| Search title | Bob's Heating & Air Conditioning Services |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH at https://www.bobsheatandac.com/
~~~

Suggested CSV line: `bobsheatandac.com,approve,yes,,,,`

## airclear.net

| | |
|---|---|
| Website | https://www.airclear.net/ |
| Search title | Air Clear, LLC |
| Found by query | osm:craft=hvac |
| Contact page | https://www.airclear.net/request-a-quote/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (turnstile, captcha)
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-49cbaf35_inspection_2026-11-02T06-46-52-000Z.jpg)

Suggested CSV line: `airclear.net,approve,yes,,,,`

## palenkimball.com

| | |
|---|---|
| Website | https://www.palenkimball.com/ |
| Search title | Palen Kimball LLC |
| Found by query | osm:craft=hvac |
| Contact page | https://www.palenkimball.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-249e0535_inspection_2026-11-02T06-46-08-763Z.jpg)

Suggested CSV line: `palenkimball.com,approve,yes,,,,`

## carneyandson.com

| | |
|---|---|
| Website | https://carneyandson.com/ |
| Search title | Carney & Son 72 Degrees |
| Found by query | osm:craft=hvac |
| Contact page | https://carneyandson.com/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required address field "Street Address": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP / Postal Code": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-cce8824b_inspection_2026-11-02T06-44-08-919Z.jpg)

Suggested CSV line: `carneyandson.com,approve,yes,,,,`

## p2psystems.net

| | |
|---|---|
| Website | https://p2psystems.net/ |
| Search title | Point 2 Point Systems |
| Found by query | osm:craft=hvac |
| Contact page | https://p2psystems.net/contact-us |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-cb7d45a1_inspection_2026-11-02T06-43-55-508Z.jpg)

Suggested CSV line: `p2psystems.net,approve,yes,,,,`

## channellandsonsac.com

| | |
|---|---|
| Website | https://www.channellandsonsac.com/ |
| Search title | Channell Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.channellandsonsac.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required address field "Address(Required)": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code(Required)": set sender zip in campaign.json to allow this form
Review: Required dropdown "Services Requested(Required)" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-b4f4739f_inspection_2026-11-02T06-43-01-323Z.jpg)

Suggested CSV line: `channellandsonsac.com,approve,yes,,,,`

## heblonheatingandcooling.com

| | |
|---|---|
| Website | https://www.heblonheatingandcooling.com/ |
| Search title | Heblon Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://heblonheatingandcooling.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required address field "input_10": set sender address in campaign.json to allow this form
Review: Required zip field "input_14": set sender zip in campaign.json to allow this form
Review: Required dropdown "input_16" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-1225f5f3_inspection_2026-11-02T06-42-08-789Z.jpg)

Suggested CSV line: `heblonheatingandcooling.com,approve,yes,,,,`

## dentairconditioning.com

| | |
|---|---|
| Website | https://www.dentairconditioning.com/ |
| Search title | Dent Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://dentairconditioning.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name*": set sender lastName in campaign.json to allow this form
Review: Required zip field "ZIP Code*": set sender zip in campaign.json to allow this form
Review: No message field detected
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-cf93dbc0_inspection_2026-11-02T06-48-16-930Z.jpg)

Suggested CSV line: `dentairconditioning.com,approve,yes,,,,`

## customerspreference.com

| | |
|---|---|
| Website | https://customerspreference.com/ |
| Search title | Customer's Preference |
| Found by query | osm:craft=hvac |
| Contact page | https://customerspreference.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-eb539b8b_inspection_2026-11-02T06-48-07-566Z.jpg)

Suggested CSV line: `customerspreference.com,approve,yes,,,,`

## umc-hvac.com

| | |
|---|---|
| Website | http://umc-hvac.com/ |
| Search title | United Mechanical Contractors |
| Found by query | osm:craft=hvac |
| Contact page | http://umc-hvac.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-5264a1ff_inspection_2026-11-02T06-41-59-589Z.jpg)

Suggested CSV line: `umc-hvac.com,approve,yes,,,,`

## quietflex.com

| | |
|---|---|
| Website | https://www.quietflex.com/ |
| Search title | Quietflex Manufacturing |
| Found by query | osm:craft=hvac |
| Contact page | https://www.quietflex.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Review: Required address field "Address Line 1
(required)": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP Code
(required)": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-f8b92937_inspection_2026-11-02T06-41-23-752Z.jpg)

Suggested CSV line: `quietflex.com,approve,yes,,,,`

## aroundtheclockservice.net

| | |
|---|---|
| Website | https://www.aroundtheclockservice.net/ |
| Search title | Around The Clock Service |
| Found by query | osm:craft=hvac |
| Contact page | https://www.aaroundtheclockservice.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Review: Required address field "Address Line 1
(required)": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP Code
(required)": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-ccb42a06_inspection_2026-11-02T06-39-18-920Z.jpg)

Suggested CSV line: `aroundtheclockservice.net,approve,yes,,,,`

## axsomair.com

| | |
|---|---|
| Website | https://www.axsomair.com/ |
| Search title | AxsomAir |
| Found by query | osm:craft=hvac |
| Contact page | https://axsomair.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required dropdown "input_5" has no truthful option
Review: Required address field "input_18": set sender address in campaign.json to allow this form
Review: Required zip field "input_14": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-50faaa1f_inspection_2026-11-02T06-47-15-762Z.jpg)

Suggested CSV line: `axsomair.com,approve,yes,,,,`

## aceair.net

| | |
|---|---|
| Website | https://www.aceair.net/ |
| Search title | Ace Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://aceair.net/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required address field "input_10": set sender address in campaign.json to allow this form
Review: Required zip field "input_14": set sender zip in campaign.json to allow this form
Review: Required dropdown "input_16" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-ed04c954_inspection_2026-11-02T06-46-24-954Z.jpg)

Suggested CSV line: `aceair.net,approve,yes,,,,`

## spicermechanical.com

| | |
|---|---|
| Website | https://spicermechanical.com/ |
| Search title | Spicer Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | http://ww547.spicermechanical.com/?tkn=19vnMT3S |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-80281815_inspection_2026-11-02T06-46-15-575Z.jpg)

Suggested CSV line: `spicermechanical.com,approve,yes,,,,`

## airmccall.com

| | |
|---|---|
| Website | https://www.airmccall.com/ |
| Search title | Air McCall, Inc |
| Found by query | osm:craft=hvac |
| Contact page | https://www.fenwickwaychoffs.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-fd8dcf85_inspection_2026-11-02T06-45-56-389Z.jpg)

Suggested CSV line: `airmccall.com,approve,yes,,,,`

## illinoisplumbingco.com

| | |
|---|---|
| Website | https://www.illinoisplumbingco.com/ |
| Search title | Illinois Plumbing Heating Supply |
| Found by query | osm:craft=hvac |
| Contact page | https://www.illinoisplumbingco.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-04ee84a5_inspection_2026-11-02T06-45-37-001Z.jpg)

Suggested CSV line: `illinoisplumbingco.com,approve,yes,,,,`

## getgreenair.com

| | |
|---|---|
| Website | https://getgreenair.com/ |
| Search title | Green Air Inc. |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://getgreenair.com/
~~~

Suggested CSV line: `getgreenair.com,approve,yes,,,,`

## trahansnow.com

| | |
|---|---|
| Website | https://www.trahansnow.com/ |
| Search title | Trahan's |
| Found by query | osm:craft=hvac |
| Contact page | https://trahansnow.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required address field "Address(Required)": set sender address in campaign.json to allow this form
Review: Required zip field "Zip Code(Required)": set sender zip in campaign.json to allow this form
Review: Required dropdown "Services Requested(Required)" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-eadcdb75_inspection_2026-11-02T06-45-15-294Z.jpg)

Suggested CSV line: `trahansnow.com,approve,yes,,,,`

## awrayfieldmechanical.com

| | |
|---|---|
| Website | https://awrayfieldmechanical.com/ |
| Search title | A W Rayfield Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | https://awrayfieldmechanical.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-bd86737a_inspection_2026-11-02T06-44-21-097Z.jpg)

Suggested CSV line: `awrayfieldmechanical.com,approve,yes,,,,`

## anchormech.com

| | |
|---|---|
| Website | https://anchormech.com/ |
| Search title | Anchor Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | https://anchormech.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-3c435746_inspection_2026-11-02T06-40-04-186Z.jpg)

Suggested CSV line: `anchormech.com,approve,yes,,,,`

## excelairllc.com

| | |
|---|---|
| Website | https://www.excelairllc.com/ |
| Search title | Excel Air, LLC |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `excelairllc.com,approve,yes,,,,`

## fayettevilleacrepair.com

| | |
|---|---|
| Website | https://www.fayettevilleacrepair.com/ |
| Search title | A/C Tech |
| Found by query | osm:craft=hvac |
| Contact page | https://www.fayettevilleacrepair.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-74a7d8e0_inspection_2026-11-02T06-40-47-328Z.jpg)

Suggested CSV line: `fayettevilleacrepair.com,approve,yes,,,,`

## graysinc.com

| | |
|---|---|
| Website | https://graysinc.com/ |
| Search title | Gray's Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://graysinc.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required dropdown "Requested Service*" has no truthful option
Review: Required field "4" is not a standard field
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-ff3025f2_inspection_2026-11-02T06-41-04-566Z.jpg)

Suggested CSV line: `graysinc.com,approve,yes,,,,`

## lasalleheating.com

| | |
|---|---|
| Website | https://lasalleheating.com/ |
| Search title | LaSalle Heating and Air Conditioning Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.lasalleheating.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-90d36f39_inspection_2026-11-02T06-41-15-442Z.jpg)

Suggested CSV line: `lasalleheating.com,approve,yes,,,,`

## breezeheatingandairconditioning.com

| | |
|---|---|
| Website | http://breezeheatingandairconditioning.com/ |
| Search title | Breeze Heating and Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.breezehvac.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: No submit button detected
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-7cc7b690_inspection_2026-11-02T06-41-32-405Z.jpg)

Suggested CSV line: `breezeheatingandairconditioning.com,approve,yes,,,,`

## superiorhvactexas.com

| | |
|---|---|
| Website | https://www.superiorhvactexas.com/ |
| Search title | Superior HVAC |
| Found by query | osm:craft=hvac |
| Contact page | http://isabelscantina.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-b7ea2b66_inspection_2026-11-02T06-41-50-860Z.jpg)

Suggested CSV line: `superiorhvactexas.com,approve,yes,,,,`

## mrairnyc.com

| | |
|---|---|
| Website | https://www.mrairnyc.com/ |
| Search title | Mr. Air NYC |
| Found by query | osm:craft=hvac |
| Contact page | https://www.mrairnyc.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-4f98dbd1_inspection_2026-11-02T06-42-51-213Z.jpg)

Suggested CSV line: `mrairnyc.com,approve,yes,,,,`

## dakotasupplygroup.com

| | |
|---|---|
| Website | https://www.dakotasupplygroup.com/ |
| Search title | Dakota Supply Group |
| Found by query | osm:craft=hvac |
| Contact page | https://www.dsgsupply.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last name": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-6cbd5d6f_inspection_2026-11-02T06-43-13-360Z.jpg)

Suggested CSV line: `dakotasupplygroup.com,approve,yes,,,,`

## parkairfl.com

| | |
|---|---|
| Website | https://www.parkairfl.com/ |
| Search title | Park Air Inc |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `parkairfl.com,approve,yes,,,,`

## vent-onellc.com

| | |
|---|---|
| Website | https://www.vent-onellc.com/ |
| Search title | Vent-One LLC |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `vent-onellc.com,approve,yes,,,,`

## acrepairkingwoodtexas.com

| | |
|---|---|
| Website | https://acrepairkingwoodtexas.com/ |
| Search title | Kingwood AC Repair Pros |
| Found by query | osm:craft=hvac |
| Contact page | https://acrepairkingwoodtexas.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-1212f80c_inspection_2026-11-02T06-44-48-472Z.jpg)

Suggested CSV line: `acrepairkingwoodtexas.com,approve,yes,,,,`

## grandyassociates.com

| | |
|---|---|
| Website | https://www.grandyassociates.com/ |
| Search title | Grandy and Associates |
| Found by query | osm:craft=hvac |
| Contact page | https://www.grandyassociates.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-96debcba_inspection_2026-11-02T06-44-55-062Z.jpg)

Suggested CSV line: `grandyassociates.com,approve,yes,,,,`

## 3phasemech.com

| | |
|---|---|
| Website | https://3phasemech.com/ |
| Search title | Three Phase Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | https://3phasemech.com/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No email field detected
Form purpose: unknown
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-4329467d_inspection_2026-11-02T06-46-39-496Z.jpg)

Suggested CSV line: `3phasemech.com,approve,yes,,,,`

## acorshvac.com

| | |
|---|---|
| Website | http://www.acorshvac.com/ |
| Search title | Acors Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | http://www.acorshvac.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-b4f9dbd8_inspection_2026-11-02T06-47-57-195Z.jpg)

Suggested CSV line: `acorshvac.com,approve,yes,,,,`

## southernairms.com

| | |
|---|---|
| Website | https://www.southernairms.com/ |
| Search title | Southern Air Heating and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.southernairms.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-99cdfd08_inspection_2026-11-02T06-40-31-479Z.jpg)

Suggested CSV line: `southernairms.com,approve,yes,,,,`

## accurateheatingac.com

| | |
|---|---|
| Website | https://accurateheatingac.com/ |
| Search title | Accurate Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website has a broken HTTPS certificate
~~~

Suggested CSV line: `accurateheatingac.com,approve,yes,,,,`

## schultehvac.com

| | |
|---|---|
| Website | https://www.schultehvac.com/ |
| Search title | Schulte HVAC |
| Found by query | osm:craft=hvac |
| Contact page | https://www.schultehvac.com/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
No-solicitation text: "c and Surrounding Areas Drop us a line! Name Email Your message Send Contact Us No Soliciting This email is only monitored during regular business hours. SCHULTE HVAC LLC"
BLOCKED: Website indicates it does not accept solicitation
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-7d095846_inspection_2026-11-02T06-55-00-234Z.jpg)

Suggested CSV line: `schultehvac.com,approve,yes,,,,`

## fitzmechanicalbaltimore.com

| | |
|---|---|
| Website | https://www.fitzmechanicalbaltimore.com/ |
| Search title | Fitz Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | https://www.fitzmechanicalbaltimore.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-c8bb0c9a_inspection_2026-11-02T06-55-11-577Z.jpg)

Suggested CSV line: `fitzmechanicalbaltimore.com,approve,yes,,,,`

## hannabery.com

| | |
|---|---|
| Website | https://www.hannabery.com/ |
| Search title | Hannabery South |
| Found by query | osm:craft=hvac |
| Contact page | https://www.hannabery.com/hannabery-hvac-contact-information.shtml |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: Required zip field "Zip": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-c4a9c352_inspection_2026-11-02T06-55-50-167Z.jpg)

Suggested CSV line: `hannabery.com,approve,yes,,,,`

## frhvac.com

| | |
|---|---|
| Website | https://www.frhvac.com/ |
| Search title | First Response Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.frhvac.com/resources/contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-35c90e28_inspection_2026-11-02T06-56-06-768Z.jpg)

Suggested CSV line: `frhvac.com,approve,yes,,,,`

## callballthatsall.com

| | |
|---|---|
| Website | https://www.callballthatsall.com/ |
| Search title | Ball Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.callballthatsall.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required address field "input_10": set sender address in campaign.json to allow this form
Review: Required zip field "input_14": set sender zip in campaign.json to allow this form
Review: Required dropdown "input_16" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-fac18521_inspection_2026-11-02T06-56-21-506Z.jpg)

Suggested CSV line: `callballthatsall.com,approve,yes,,,,`

## accessheating.com

| | |
|---|---|
| Website | https://accessheating.com/ |
| Search title | Access Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://accessheating.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required field "how-hear-about" is not a standard field
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-db637ab5_inspection_2026-11-02T06-57-42-549Z.jpg)

Suggested CSV line: `accessheating.com,approve,yes,,,,`

## palmershvac.com

| | |
|---|---|
| Website | https://www.palmershvac.com/ |
| Search title | Palmers Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.palmershvac.com/contact.php |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (captcha)
Review: Required last name field "Name: *": set sender lastName in campaign.json to allow this form
Review: No submit button detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-07db6054_inspection_2026-11-02T06-50-26-218Z.jpg)

Suggested CSV line: `palmershvac.com,approve,yes,,,,`

## rmadden.com

| | |
|---|---|
| Website | https://www.rmadden.com/ |
| Search title | Robert Madden Industries |
| Found by query | osm:craft=hvac |
| Contact page | https://www.rmadden.com/Contact |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name: *": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-a4b22aa2_inspection_2026-11-02T06-50-50-411Z.jpg)

Suggested CSV line: `rmadden.com,approve,yes,,,,`

## rbedal.com

| | |
|---|---|
| Website | https://rbedal.com/ |
| Search title | R-Bedal Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `rbedal.com,approve,yes,,,,`

## townandcountryrefrigeration.com

| | |
|---|---|
| Website | https://www.townandcountryrefrigeration.com/ |
| Search title | Town & Country Refrigeration |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: Timeout 30000ms exceeded.
~~~

Suggested CSV line: `townandcountryrefrigeration.com,approve,yes,,,,`

## walshbrothersinc.com

| | |
|---|---|
| Website | https://www.walshbrothersinc.com/ |
| Search title | Walsh Brothers Plumbing and Mechanical Services, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.walshbrothersinc.com/contact/send-a-message/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "Last": set sender lastName in campaign.json to allow this form
Review: Required dropdown "How Did You Hear About Us? *" has no truthful option
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-075f7426_inspection_2026-11-02T06-53-47-806Z.jpg)

Suggested CSV line: `walshbrothersinc.com,approve,yes,,,,`

## energyserv.com

| | |
|---|---|
| Website | https://energyserv.com/ |
| Search title | Energy Services Air Conditioning and Heating Company |
| Found by query | osm:craft=hvac |
| Contact page | https://www.energyserv.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-69bde036_inspection_2026-11-02T06-54-28-056Z.jpg)

Suggested CSV line: `energyserv.com,approve,yes,,,,`

## arcmech.com

| | |
|---|---|
| Website | https://www.arcmech.com/ |
| Search title | ARC Mechanical Contractors |
| Found by query | osm:craft=hvac |
| Contact page | https://www.arcmech.com/service-consultation |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Review: Required address field "Address Line 1
(required)": set sender address in campaign.json to allow this form
Review: Required zip field "ZIP Code
(required)": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-71993fbf_inspection_2026-11-02T06-56-47-692Z.jpg)

Suggested CSV line: `arcmech.com,approve,yes,,,,`

## natalsairconditioning.com

| | |
|---|---|
| Website | https://www.natalsairconditioning.com/ |
| Search title | Natal's Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.natalsairconditioning.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "Last Name": set sender lastName in campaign.json to allow this form
Review: Required address field "Address": set sender address in campaign.json to allow this form
Review: Required dropdown "Are you a new customer?" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-03ec4d34_inspection_2026-11-02T06-57-52-094Z.jpg)

Suggested CSV line: `natalsairconditioning.com,approve,yes,,,,`

## republic-ac.com

| | |
|---|---|
| Website | https://www.republic-ac.com/ |
| Search title | Republic Heating & Air Conditioning, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.republic-ac.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-ce264648_inspection_2026-11-02T06-57-08-897Z.jpg)

Suggested CSV line: `republic-ac.com,approve,yes,,,,`

## clintontownshipheatingcooling.com

| | |
|---|---|
| Website | https://www.clintontownshipheatingcooling.com/ |
| Search title | Clinton Township Heating and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH at https://www.clintontownshipheatingcooling.com/
~~~

Suggested CSV line: `clintontownshipheatingcooling.com,approve,yes,,,,`

## accurateheatingcooling.com

| | |
|---|---|
| Website | https://accurateheatingcooling.com/ |
| Search title | Accurate Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website has a broken HTTPS certificate
~~~

Suggested CSV line: `accurateheatingcooling.com,approve,yes,,,,`

## duffetthomeservices.com

| | |
|---|---|
| Website | https://www.duffetthomeservices.com/ |
| Search title | Duffett Plumbing, Heating & AC |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `duffetthomeservices.com,approve,yes,,,,`

## allstarplumbingandrooter.com

| | |
|---|---|
| Website | https://www.allstarplumbingandrooter.com/ |
| Search title | Allstar Home Services |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH at https://www.allstarplumbingandrooter.com/
~~~

Suggested CSV line: `allstarplumbingandrooter.com,approve,yes,,,,`

## normanwright.com

| | |
|---|---|
| Website | https://normanwright.com/ |
| Search title | Norman S. Wright |
| Found by query | osm:craft=hvac |
| Contact page | https://normanwright.com/contact |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last Name
(required)": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-75bb1a30_inspection_2026-11-02T06-50-07-652Z.jpg)

Suggested CSV line: `normanwright.com,approve,yes,,,,`

## efficient-systems.com

| | |
|---|---|
| Website | https://www.efficient-systems.com/ |
| Search title | Efficient Systems |
| Found by query | osm:craft=hvac |
| Contact page | https://www.efficient-systems.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required address field "input_10": set sender address in campaign.json to allow this form
Review: Required zip field "input_14": set sender zip in campaign.json to allow this form
Review: Required dropdown "input_16" has no truthful option
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-91d319a6_inspection_2026-11-02T06-49-32-395Z.jpg)

Suggested CSV line: `efficient-systems.com,approve,yes,,,,`

## mrductcleaning.com

| | |
|---|---|
| Website | https://www.mrductcleaning.com/ |
| Search title | Mr. Duct Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: Timeout 30000ms exceeded.
~~~

Suggested CSV line: `mrductcleaning.com,approve,yes,,,,`

## curriesphc.com

| | |
|---|---|
| Website | https://curriesphc.com/ |
| Search title | Currie's Plumbing, Heating, and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://curriesphc.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required field "What is thirteen minus 6? *" is not a standard field
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-a7524cf6_inspection_2026-11-02T06-54-42-648Z.jpg)

Suggested CSV line: `curriesphc.com,approve,yes,,,,`

## pearsonguy.com

| | |
|---|---|
| Website | https://www.pearsonguy.com/ |
| Search title | Pearson Plumbing & Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://www.pearsonguy.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Review: Required last name field "last-name": set sender lastName in campaign.json to allow this form
Review: Required address field "street": set sender address in campaign.json to allow this form
Review: Required zip field "zip": set sender zip in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-a5225708_inspection_2026-11-02T06-54-02-988Z.jpg)

Suggested CSV line: `pearsonguy.com,approve,yes,,,,`

## rc-airconditioning.com

| | |
|---|---|
| Website | https://rc-airconditioning.com/ |
| Search title | RC Air Heating & Air Conditioning Service |
| Found by query | osm:craft=hvac |
| Contact page | https://rc-airconditioning.com/contact/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: Required last name field "Last name": set sender lastName in campaign.json to allow this form
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-778aeee7_inspection_2026-11-02T06-50-36-671Z.jpg)

Suggested CSV line: `rc-airconditioning.com,approve,yes,,,,`

## allclaimsrepairs.com

| | |
|---|---|
| Website | https://www.allclaimsrepairs.com/ |
| Search title | All Claims Repairs Ohio |
| Found by query | osm:craft=hvac |
| Contact page | https://www.allclaimsrepairs.com/contact/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
BLOCKED: Form purpose is job application
Review: Required last name field "names[last_name]": set sender lastName in campaign.json to allow this form
Review: Required address field "address_1[address_line_1]": set sender address in campaign.json to allow this form
Review: Required zip field "address_1[zip]": set sender zip in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-7c2268f5_inspection_2026-11-02T06-53-34-425Z.jpg)

Suggested CSV line: `allclaimsrepairs.com,approve,yes,,,,`

## reimerhvac.com

| | |
|---|---|
| Website | https://www.reimerhvac.com/ |
| Search title | Reimer Home Services |
| Found by query | osm:craft=hvac |
| Contact page | https://reimerhvac.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is booking
Form purpose: booking
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-f0678c7d_inspection_2026-11-02T06-51-00-939Z.jpg)

Suggested CSV line: `reimerhvac.com,approve,yes,,,,`

## comfortairhome.com

| | |
|---|---|
| Website | https://comfortairhome.com/ |
| Search title | Comfort Air |
| Found by query | osm:craft=hvac |
| Contact page | https://www.comfortairhome.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-a34d4e9e_inspection_2026-11-02T06-51-12-632Z.jpg)

Suggested CSV line: `comfortairhome.com,approve,yes,,,,`

## precisionhvac.com

| | |
|---|---|
| Website | https://precisionhvac.com/ |
| Search title | Precision Air Condictioning & Heating LLC. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.precisionhvac.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-7acd6474_inspection_2026-11-02T06-51-40-254Z.jpg)

Suggested CSV line: `precisionhvac.com,approve,yes,,,,`

## fmberkinc.com

| | |
|---|---|
| Website | https://fmberkinc.com/ |
| Search title | F M Berkheimer Inc |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.fmberkinc.com/
~~~

Suggested CSV line: `fmberkinc.com,approve,yes,,,,`

## mullhausenhvac.com

| | |
|---|---|
| Website | https://www.mullhausenhvac.com/ |
| Search title | Mullhausen Heating and Air Conditioning Company |
| Found by query | osm:craft=hvac |
| Contact page | https://www.mullhausenhvac.com/contact-us/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
Review: No email field detected
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-63813c44_inspection_2026-11-02T06-51-50-843Z.jpg)

Suggested CSV line: `mullhausenhvac.com,approve,yes,,,,`

## heatingrepairnh.com

| | |
|---|---|
| Website | https://heatingrepairnh.com/ |
| Search title | Energy Unlimited |
| Found by query | osm:craft=hvac |
| Contact page | https://heatingrepairnh.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-5ff50a59_inspection_2026-11-02T06-56-58-079Z.jpg)

Suggested CSV line: `heatingrepairnh.com,approve,yes,,,,`

## consumerschoicehvac.com

| | |
|---|---|
| Website | https://www.consumerschoicehvac.com/ |
| Search title | Consumers Choice Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.consumerschoicehvac.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-8300d6fd_inspection_2026-11-02T06-55-42-161Z.jpg)

Suggested CSV line: `consumerschoicehvac.com,approve,yes,,,,`

## totalcomfortny.com

| | |
|---|---|
| Website | https://totalcomfortny.com/ |
| Search title | Total Comfort Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.totalcomfortny.com/?\_\_cf\_chl\_rt\_tk=.g4fLRUFwG.qaEGD06lxVGGjbxMDnEyD9lY.IhG5Dlc-1793602519-1.0.1.1-.DxT4J55VMrGkBNhyzH72qCPChMShT9.PeTMA\_\_A3w4 |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-6e5f45b5_inspection_2026-11-02T06-55-19-206Z.jpg)

Suggested CSV line: `totalcomfortny.com,approve,yes,,,,`

## aasenheating.com

| | |
|---|---|
| Website | https://www.aasenheating.com/ |
| Search title | Aasen Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://aasenheating.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-747c70a7_inspection_2026-11-02T06-52-05-466Z.jpg)

Suggested CSV line: `aasenheating.com,approve,yes,,,,`

## cooltouchprescottvalley.com

| | |
|---|---|
| Website | https://www.cooltouchprescottvalley.com/ |
| Search title | Cool Touch Air Conditioning and Heating |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | error |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
Inspection error: Website not reachable: the domain no longer resolves (dead or old website)
~~~

Suggested CSV line: `cooltouchprescottvalley.com,approve,yes,,,,`

## wjdornfeld.com

| | |
|---|---|
| Website | https://wjdornfeld.com/ |
| Search title | W.J Dornfeld company |
| Found by query | osm:craft=hvac |
| Contact page | https://wjdornfeld.com/contact-us/ |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha, captcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-d5f21f86_inspection_2026-11-02T06-53-24-989Z.jpg)

Suggested CSV line: `wjdornfeld.com,approve,yes,,,,`

## robertsheating.com

| | |
|---|---|
| Website | https://www.robertsheating.com/ |
| Search title | Roberts Heating & Air Conditioning, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.robertsheating.com/contact/send-message |
| Review | **pending** |
| Inspection | blocked |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: CAPTCHA / anti-bot present (recaptcha)
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-3483658d_inspection_2026-11-02T06-54-51-681Z.jpg)

Suggested CSV line: `robertsheating.com,approve,yes,,,,`

## platinumplumbingpa.com

| | |
|---|---|
| Website | https://www.platinumplumbingpa.com/ |
| Search title | Platinum Plumbing & Heating, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.platinumplumbingpa.com/contact-us/24-7-emergency-services/ |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is emergency
Review: Required last name field "Last Name *": set sender lastName in campaign.json to allow this form
Review: Required field "Custom Captcha *" is not a standard field
Form purpose: emergency
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-7f48c788_inspection_2026-11-02T06-57-23-661Z.jpg)

Suggested CSV line: `platinumplumbingpa.com,approve,yes,,,,`

## classicairecare.com

| | |
|---|---|
| Website | https://www.classicairecare.com/ |
| Search title | Classic Aire Care |
| Found by query | osm:craft=hvac |
| Contact page | https://www.classicairecare.com/contact-us |
| Review | **pending** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: untested |

Suitability notes:

~~~text
Search country: US
BLOCKED: Form purpose is job application
Review: Required last name field "LAST NAME*": set sender lastName in campaign.json to allow this form
Form purpose: job application
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-68ef566f_inspection_2026-11-02T06-49-56-142Z.jpg)

Suggested CSV line: `classicairecare.com,approve,yes,,,,`

## hvacrepairpearland.com

| | |
|---|---|
| Website | https://hvacrepairpearland.com/ |
| Search title | Pearland AC Repair Pros |
| Found by query | osm:craft=hvac |
| Contact page | https://hvacrepairpearland.com/ |
| Review | **pending** |
| Inspection | no\_form |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/6fa756be-1c06-4090-bf40-6412ad628bce/run-6fa756be_candidate-7bdd2750_inspection_2026-11-02T06-58-25-936Z.jpg)

Suggested CSV line: `hvacrepairpearland.com,approve,yes,,,,`

## austinairconditioner.org

| | |
|---|---|
| Website | https://austinairconditioner.org/ |
| Search title | Fixorvo AC Repair |
| Found by query | osm:craft=hvac |
| Contact page | — |
| Review | **pending** |
| Inspection | not\_inspected |
| Form adapter | none · dry-run test: — |

Suitability notes:

~~~text
Search country: US
~~~

Suggested CSV line: `austinairconditioner.org,approve,yes,,,,`

## precisionplumbingoc.com

| | |
|---|---|
| Website | https://www.precisionplumbingoc.com/ |
| Search title | Precision Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://precisionplumbingoc.com/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-21d8144a_inspection_2026-11-02T03-09-32-656Z.jpg)

Suggested CSV line: `precisionplumbingoc.com,approve,yes,,,,`

## oneillplumbing.com

| | |
|---|---|
| Website | https://oneillplumbing.com/ |
| Search title | O'Neill Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://oneillplumbing.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-be824dba_inspection_2026-11-02T03-09-09-576Z.jpg)

Suggested CSV line: `oneillplumbing.com,approve,yes,,,,`

## tureksplumbing.com

| | |
|---|---|
| Website | https://tureksplumbing.com/ |
| Search title | Turek's Plumbing, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.tureksplumbing.com/contact/send-message |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-f70525e8_inspection_2026-11-02T03-09-17-461Z.jpg)

Suggested CSV line: `tureksplumbing.com,approve,yes,,,,`

## thomasharkinsplumbing.com

| | |
|---|---|
| Website | https://www.thomasharkinsplumbing.com/ |
| Search title | Thomas Harkins Plumbing & Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://www.thomasharkinsplumbing.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-93b7f8cc_inspection_2026-11-02T03-09-25-722Z.jpg)

Suggested CSV line: `thomasharkinsplumbing.com,approve,yes,,,,`

## peninsularplumbing.com

| | |
|---|---|
| Website | https://www.peninsularplumbing.com/ |
| Search title | Peninsular Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://peninsularplumbing.com/contact-peninsular-plumbing/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-66444623_inspection_2026-11-02T03-10-56-503Z.jpg)

Suggested CSV line: `peninsularplumbing.com,approve,yes,,,,`

## performanceplumbinginc.com

| | |
|---|---|
| Website | https://www.performanceplumbinginc.com/ |
| Search title | Performance Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.performanceplumbinginc.com/contact/schedule-service |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-fbabb4bc_inspection_2026-11-02T03-10-18-940Z.jpg)

Suggested CSV line: `performanceplumbinginc.com,approve,yes,,,,`

## finkeldeyseptic.com

| | |
|---|---|
| Website | https://finkeldeyseptic.com/ |
| Search title | Finkeldey Septic |
| Found by query | osm:craft=plumber |
| Contact page | https://finkeldeyseptic.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-8f0be9ab_inspection_2026-11-02T03-09-46-666Z.jpg)

Suggested CSV line: `finkeldeyseptic.com,approve,yes,,,,`

## helpfulplumbing.com

| | |
|---|---|
| Website | https://www.helpfulplumbing.com/ |
| Search title | Helpful Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.metrowebsites.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-53723ed2_inspection_2026-11-02T03-10-12-103Z.jpg)

Suggested CSV line: `helpfulplumbing.com,approve,yes,,,,`

## integrityrepiping.com

| | |
|---|---|
| Website | https://integrityrepiping.com/ |
| Search title | Integrity Repipe Inc |
| Found by query | osm:craft=plumber |
| Contact page | https://integrityrepiping.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-0ae2c1c3_inspection_2026-11-02T03-09-52-892Z.jpg)

Suggested CSV line: `integrityrepiping.com,approve,yes,,,,`

## integrityrepipe.com

| | |
|---|---|
| Website | https://www.integrityrepipe.com/ |
| Search title | Integrity Repipe Inc |
| Found by query | osm:craft=plumber |
| Contact page | https://www.integrityrepipe.com/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-f7bd5749_inspection_2026-11-02T03-11-09-366Z.jpg)

Suggested CSV line: `integrityrepipe.com,approve,yes,,,,`

## lineyourpipes.com

| | |
|---|---|
| Website | https://www.lineyourpipes.com/ |
| Search title | AK Pipe Lining |
| Found by query | osm:craft=plumber |
| Contact page | https://www.lineyourpipes.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-6700f1d1_inspection_2026-11-02T03-10-02-465Z.jpg)

Suggested CSV line: `lineyourpipes.com,approve,yes,,,,`

## roddingrooter.com

| | |
|---|---|
| Website | https://roddingrooter.com/ |
| Search title | Rodding Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://roddingrooter.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-43432ce4_inspection_2026-11-02T03-09-39-978Z.jpg)

Suggested CSV line: `roddingrooter.com,approve,yes,,,,`

## millcreekplumbingllc.com

| | |
|---|---|
| Website | http://www.millcreekplumbingllc.com/ |
| Search title | Millcreek Plumbing, LLC |
| Found by query | osm:craft=plumber |
| Contact page | http://millcreekplumbingllc.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-30c10743_inspection_2026-11-02T03-10-32-251Z.jpg)

Suggested CSV line: `millcreekplumbingllc.com,approve,yes,,,,`

## eliterooter.com

| | |
|---|---|
| Website | https://www.eliterooter.com/ |
| Search title | Elite Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://www.eliterooter.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-0c2b44d4_inspection_2026-11-02T03-10-46-357Z.jpg)

Suggested CSV line: `eliterooter.com,approve,yes,,,,`

## rotorooterbck.com

| | |
|---|---|
| Website | https://www.rotorooterbck.com/ |
| Search title | Roto-Rooter Plumbers |
| Found by query | osm:craft=plumber |
| Contact page | https://www.rotorooterbck.com/contact-us |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-11331503_inspection_2026-11-02T03-10-39-394Z.jpg)

Suggested CSV line: `rotorooterbck.com,approve,yes,,,,`

## tri-countyplumbing.com

| | |
|---|---|
| Website | https://www.tri-countyplumbing.com/ |
| Search title | Tri-County Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.tri-countyplumbing.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-33fa6f7f_inspection_2026-11-02T03-10-26-333Z.jpg)

Suggested CSV line: `tri-countyplumbing.com,approve,yes,,,,`

## fredjmoyer.com

| | |
|---|---|
| Website | https://www.fredjmoyer.com/ |
| Search title | Fred J. Moyer Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.fredjmoyer.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4ac30249-98f2-42b0-b9f0-f204759872d6/run-4ac30249_attempt-26fef685_inspection_2026-11-02T03-11-02-944Z.jpg)

Suggested CSV line: `fredjmoyer.com,approve,yes,,,,`

## anywhererooter.com

| | |
|---|---|
| Website | https://www.anywhererooter.com/ |
| Search title | Anywhere Rooter |
| Found by query | osm:craft=plumber |
| Contact page | https://anywhererooter.com/contact-us-plumbing-denver/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-1bb1d51d_inspection_2026-11-02T03-46-21-068Z.jpg)

Suggested CSV line: `anywhererooter.com,approve,yes,,,,`

## idahosplumber.com

| | |
|---|---|
| Website | https://www.idahosplumber.com/ |
| Search title | American Rooter & Drain |
| Found by query | osm:craft=plumber |
| Contact page | https://americanrooterdrain.com/contact/\#form |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-de5958db_inspection_2026-11-02T03-45-23-978Z.jpg)

Suggested CSV line: `idahosplumber.com,approve,yes,,,,`

## ameengeneralcontracting.com

| | |
|---|---|
| Website | https://ameengeneralcontracting.com/ |
| Search title | Ameen General Contractor Inc |
| Found by query | osm:craft=plumber |
| Contact page | https://ameengeneralcontracting.com/contact-ameen-general-contracting/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/56769afe-ae21-41e3-9178-651755469ac7/run-56769afe_attempt-7153d4ce_inspection_2026-11-02T06-18-19-925Z.jpg)

Suggested CSV line: `ameengeneralcontracting.com,approve,yes,,,,`

## thyplumber.com

| | |
|---|---|
| Website | https://www.thyplumber.com/ |
| Search title | Thy Plumber |
| Found by query | osm:craft=plumber |
| Contact page | https://www.thyplumber.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-4b4e8be3_inspection_2026-11-02T03-45-30-107Z.jpg)

Suggested CSV line: `thyplumber.com,approve,yes,,,,`

## helixmechanical.com

| | |
|---|---|
| Website | https://helixmechanical.com/ |
| Search title | Helix Mechanical Inc |
| Found by query | osm:craft=plumber |
| Contact page | https://helixmechanical.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | proposed · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-2fa9e0c5_inspection_2026-11-02T06-58-33-059Z.jpg)

Suggested CSV line: `helixmechanical.com,approve,yes,,,,`

## abcwatermn.com

| | |
|---|---|
| Website | https://abcwatermn.com/ |
| Search title | ABC Water Conditioning Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.abcwatermn.com/contact-water-treatment-experts |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-aef42710_inspection_2026-11-02T03-45-16-823Z.jpg)

Suggested CSV line: `abcwatermn.com,approve,yes,,,,`

## waterresourcesnj.com

| | |
|---|---|
| Website | https://waterresourcesnj.com/ |
| Search title | Water Resources of NJ |
| Found by query | osm:craft=plumber |
| Contact page | https://waterresourcesnj.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-99775787_inspection_2026-11-02T03-45-09-289Z.jpg)

Suggested CSV line: `waterresourcesnj.com,approve,yes,,,,`

## 411plumber.com

| | |
|---|---|
| Website | https://411plumber.com/ |
| Search title | 411 Plumber |
| Found by query | osm:craft=plumber |
| Contact page | https://411plumber.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-9f6c9fe4_inspection_2026-11-02T03-46-07-518Z.jpg)

Suggested CSV line: `411plumber.com,approve,yes,,,,`

## abetterplumberonline.com

| | |
|---|---|
| Website | https://abetterplumberonline.com/ |
| Search title | A Better Plumber & Sewer Company Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.abetterplumberonline.com/contact-us |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-d9ed89d7_inspection_2026-11-02T03-45-47-052Z.jpg)

Suggested CSV line: `abetterplumberonline.com,approve,yes,,,,`

## aloha-plumbinghvac.com

| | |
|---|---|
| Website | https://www.aloha-plumbinghvac.com/ |
| Search title | Aloha Plumbing, Heating & Air |
| Found by query | osm:craft=plumber |
| Contact page | https://aloha-plumbinghvac.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-5f09b7f1_inspection_2026-11-02T03-46-00-800Z.jpg)

Suggested CSV line: `aloha-plumbinghvac.com,approve,yes,,,,`

## mjunderground.com

| | |
|---|---|
| Website | https://mjunderground.com/ |
| Search title | M & J Underground, Inc. |
| Found by query | osm:craft=plumber |
| Contact page | https://www.mjunderground.com/reach-out-utility-service |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-1ec19d0f_inspection_2026-11-02T03-45-53-928Z.jpg)

Suggested CSV line: `mjunderground.com,approve,yes,,,,`

## clearchoiceplumbingllc.com

| | |
|---|---|
| Website | https://clearchoiceplumbingllc.com/ |
| Search title | ClearChoice Plumbing, LLC |
| Found by query | osm:craft=plumber |
| Contact page | https://clearchoiceplumbingllc.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/c528f0c9-b48a-402f-a131-fe21ad13993f/run-c528f0c9_attempt-2ae05292_inspection_2026-11-02T07-00-22-698Z.jpg)

Suggested CSV line: `clearchoiceplumbingllc.com,approve,yes,,,,`

## freedomplumbingmidwest.com

| | |
|---|---|
| Website | https://freedomplumbingmidwest.com/ |
| Search title | Freedom Plumbing and Water Conditioning |
| Found by query | osm:craft=plumber |
| Contact page | https://freedomplumbingmidwest.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/b1950cf0-0d00-439e-a3e0-a2c85a436d91/run-b1950cf0_attempt-9d4a84f7_inspection_2026-11-02T03-46-28-670Z.jpg)

Suggested CSV line: `freedomplumbingmidwest.com,approve,yes,,,,`

## zicarosplumbing.com

| | |
|---|---|
| Website | https://www.zicarosplumbing.com/ |
| Search title | Zicaro's Plumbing Services |
| Found by query | osm:craft=plumber |
| Contact page | https://www.zicarosplumbing.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-c4e2dc6e_inspection_2026-11-02T04-26-31-397Z.jpg)

Suggested CSV line: `zicarosplumbing.com,approve,yes,,,,`

## reece.com

| | |
|---|---|
| Website | https://www.reece.com/ |
| Search title | Reece Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://www.reece.com/contact-reece-usa |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-6050609d_inspection_2026-11-02T04-26-38-891Z.jpg)

Suggested CSV line: `reece.com,approve,yes,,,,`

## dunnellsplumbing.com

| | |
|---|---|
| Website | https://www.dunnellsplumbing.com/ |
| Search title | Dunnells Plumbing and Heating |
| Found by query | osm:craft=plumber |
| Contact page | https://www.dunnellsplumbing.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-0ae382b5_inspection_2026-11-02T04-27-00-417Z.jpg)

Suggested CSV line: `dunnellsplumbing.com,approve,yes,,,,`

## pinecreekplumbing.com

| | |
|---|---|
| Website | https://pinecreekplumbing.com/ |
| Search title | Pine Creek Plumbing |
| Found by query | osm:craft=plumber |
| Contact page | https://pinecreekplumbing.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-604ddde1_inspection_2026-11-02T04-26-45-854Z.jpg)

Suggested CSV line: `pinecreekplumbing.com,approve,yes,,,,`

## intelligentservice.com

| | |
|---|---|
| Website | https://intelligentservice.com/ |
| Search title | Intelligent Service: Plumbing, Heating, Cooling & Drain Cleaning |
| Found by query | osm:craft=plumber |
| Contact page | https://intelligentservice.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-80cd8bb1_inspection_2026-11-02T04-26-53-514Z.jpg)

Suggested CSV line: `intelligentservice.com,approve,yes,,,,`

## totalroofingco.com

| | |
|---|---|
| Website | https://www.totalroofingco.com/ |
| Search title | Total Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://total-roofing.co/contact-us |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-5975af7e_inspection_2026-11-02T04-27-07-313Z.jpg)

Suggested CSV line: `totalroofingco.com,approve,yes,,,,`

## pearsonroofing.com

| | |
|---|---|
| Website | https://www.pearsonroofing.com/ |
| Search title | Pearson Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.pearsonroofing.com/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-4d3f17fa_inspection_2026-11-02T04-27-21-957Z.jpg)

Suggested CSV line: `pearsonroofing.com,approve,yes,,,,`

## allstarroofingtexas.com

| | |
|---|---|
| Website | https://www.allstarroofingtexas.com/ |
| Search title | All Star Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://allstarroofingtexas.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-d4df9467_inspection_2026-11-02T04-27-14-061Z.jpg)

Suggested CSV line: `allstarroofingtexas.com,approve,yes,,,,`

## topnotchseamlessgutters.com

| | |
|---|---|
| Website | https://topnotchseamlessgutters.com/ |
| Search title | Top Notch Seamless Gutters |
| Found by query | osm:craft=roofer |
| Contact page | https://topnotchseamlessgutters.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-1985ba62_inspection_2026-11-02T04-27-29-156Z.jpg)

Suggested CSV line: `topnotchseamlessgutters.com,approve,yes,,,,`

## orlandoroofingco.com

| | |
|---|---|
| Website | https://orlandoroofingco.com/ |
| Search title | Orlando Roofing Co. |
| Found by query | osm:craft=roofer |
| Contact page | https://orlandoroofingco.com/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a98ca8b9-95fe-4336-83cb-55463f3421a7/run-a98ca8b9_attempt-be70f64e_inspection_2026-11-02T04-27-35-641Z.jpg)

Suggested CSV line: `orlandoroofingco.com,approve,yes,,,,`

## sharkeyroofing.com

| | |
|---|---|
| Website | https://www.sharkeyroofing.com/ |
| Search title | Sharkey Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.sharkeyroofing.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-ffb7325b_inspection_2026-11-02T05-05-23-166Z.jpg)

Suggested CSV line: `sharkeyroofing.com,approve,yes,,,,`

## arizonanativeroofing.com

| | |
|---|---|
| Website | https://arizonanativeroofing.com/ |
| Search title | Arizona Native Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://arizonanativeroofing.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-1289d909_inspection_2026-11-02T05-05-01-171Z.jpg)

Suggested CSV line: `arizonanativeroofing.com,approve,yes,,,,`

## deeganbrothersroofing.com

| | |
|---|---|
| Website | https://www.deeganbrothersroofing.com/ |
| Search title | Deegan Brothers |
| Found by query | osm:craft=roofer |
| Contact page | https://www.deeganbrothersroofing.com/contact-us |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-e2d1d04f_inspection_2026-11-02T05-05-08-536Z.jpg)

Suggested CSV line: `deeganbrothersroofing.com,approve,yes,,,,`

## capitalrealestateconstruction.com

| | |
|---|---|
| Website | https://capitalrealestateconstruction.com/ |
| Search title | Capital Real Estate Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://capitalrealestateconstruction.com/capital-real-estate-construction/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-d604c304_inspection_2026-11-02T05-05-16-063Z.jpg)

Suggested CSV line: `capitalrealestateconstruction.com,approve,yes,,,,`

## volkosupply.com

| | |
|---|---|
| Website | http://volkosupply.com/ |
| Search title | Volko Supply Co. Inc. |
| Found by query | osm:craft=roofer |
| Contact page | http://volkosupply.com/contactus.cfm |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-76d6a5d2_inspection_2026-11-02T05-04-54-485Z.jpg)

Suggested CSV line: `volkosupply.com,approve,yes,,,,`

## rhinoroofer.com

| | |
|---|---|
| Website | https://rhinoroofer.com/ |
| Search title | Rhino Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://rhinoroofer.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-bde4400c_inspection_2026-11-02T05-04-34-024Z.jpg)

Suggested CSV line: `rhinoroofer.com,approve,yes,,,,`

## affordableroofmd.com

| | |
|---|---|
| Website | https://www.affordableroofmd.com/ |
| Search title | Affordable Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.affordableroofmd.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-4df3f35b_inspection_2026-11-02T05-05-30-957Z.jpg)

Suggested CSV line: `affordableroofmd.com,approve,yes,,,,`

## loganroof.com

| | |
|---|---|
| Website | https://www.loganroof.com/ |
| Search title | Logan Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://loganroof.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-47fe3f1c_inspection_2026-11-02T05-05-38-367Z.jpg)

Suggested CSV line: `loganroof.com,approve,yes,,,,`

## roofingbyelite.com

| | |
|---|---|
| Website | https://www.roofingbyelite.com/ |
| Search title | Roofing by Elite |
| Found by query | osm:craft=roofer |
| Contact page | https://roofingbyelite.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-de49f743_inspection_2026-11-02T05-05-45-348Z.jpg)

Suggested CSV line: `roofingbyelite.com,approve,yes,,,,`

## roofingappletonwisconsin.com

| | |
|---|---|
| Website | https://roofingappletonwisconsin.com/ |
| Search title | Pachner Exteriors Of Wisconsin |
| Found by query | osm:craft=roofer |
| Contact page | https://roofingappletonwisconsin.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-4e537d32_inspection_2026-11-02T05-05-59-938Z.jpg)

Suggested CSV line: `roofingappletonwisconsin.com,approve,yes,,,,`

## beckerschimneyandroofing.com

| | |
|---|---|
| Website | https://www.beckerschimneyandroofing.com/ |
| Search title | Becker's Chimney and Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.beckerschimneyandroofing.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-60bc26d8_inspection_2026-11-02T05-05-52-451Z.jpg)

Suggested CSV line: `beckerschimneyandroofing.com,approve,yes,,,,`

## legacyroofingutah.com

| | |
|---|---|
| Website | https://legacyroofingutah.com/ |
| Search title | Legacy Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://www.legacyroofingutah.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-d270234e_inspection_2026-11-02T05-06-09-401Z.jpg)

Suggested CSV line: `legacyroofingutah.com,approve,yes,,,,`

## phoenixroofing.com

| | |
|---|---|
| Website | https://phoenixroofing.com/ |
| Search title | Phoenix Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://phoenixroofing.com/contact-phoenix-roofing/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/679a9956-41a3-4c11-bd58-83df96241a8a/run-679a9956_attempt-783c7cf1_inspection_2026-11-02T05-06-16-816Z.jpg)

Suggested CSV line: `phoenixroofing.com,approve,yes,,,,`

## flattoproofing.com

| | |
|---|---|
| Website | https://flattoproofing.com/ |
| Search title | Flattop Roofing Inc. |
| Found by query | osm:craft=roofer |
| Contact page | https://flattoproofing.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-8f1a8c60_inspection_2026-11-02T05-42-03-458Z.jpg)

Suggested CSV line: `flattoproofing.com,approve,yes,,,,`

## heinscontracting.com

| | |
|---|---|
| Website | https://www.heinscontracting.com/ |
| Search title | Heins Contracting Roofing and Siding Waukesha |
| Found by query | osm:craft=roofer |
| Contact page | https://www.heinscontracting.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-98d3f765_inspection_2026-11-02T05-42-19-031Z.jpg)

Suggested CSV line: `heinscontracting.com,approve,yes,,,,`

## collins-mrc.com

| | |
|---|---|
| Website | https://www.collins-mrc.com/ |
| Search title | Collins Roofing and Sheet Metal |
| Found by query | osm:craft=roofer |
| Contact page | https://collins-mrc.com/quote/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-27b08f9e_inspection_2026-11-02T05-42-25-440Z.jpg)

Suggested CSV line: `collins-mrc.com,approve,yes,,,,`

## upscalehomeinspect.com

| | |
|---|---|
| Website | https://www.upscalehomeinspect.com/ |
| Search title | Upscale Home Inspections LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://www.upscalehomeinspect.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-3acebaa2_inspection_2026-11-02T05-42-10-776Z.jpg)

Suggested CSV line: `upscalehomeinspect.com,approve,yes,,,,`

## kornerstoneroofing.com

| | |
|---|---|
| Website | https://kornerstoneroofing.com/ |
| Search title | Kornerstone Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://bluebirdroofingny.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-a13c408d_inspection_2026-11-02T05-42-55-388Z.jpg)

Suggested CSV line: `kornerstoneroofing.com,approve,yes,,,,`

## chappelleroofing.com

| | |
|---|---|
| Website | https://chappelleroofing.com/ |
| Search title | Chappelle Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://chappelleroofing.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-f8a89143_inspection_2026-11-02T05-42-48-236Z.jpg)

Suggested CSV line: `chappelleroofing.com,approve,yes,,,,`

## hometown-roofingandconstruction.com

| | |
|---|---|
| Website | https://hometown-roofingandconstruction.com/ |
| Search title | Hometown Roofing & Construction |
| Found by query | osm:craft=roofer |
| Contact page | https://hometown-roofing.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-0f451d1f_inspection_2026-11-02T05-42-31-603Z.jpg)

Suggested CSV line: `hometown-roofingandconstruction.com,approve,yes,,,,`

## calvaryroofingtx.com

| | |
|---|---|
| Website | https://calvaryroofingtx.com/ |
| Search title | Calvary Roofing and Construction LLC |
| Found by query | osm:craft=roofer |
| Contact page | https://calvaryroofingtx.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-eda581fe_inspection_2026-11-02T05-42-39-728Z.jpg)

Suggested CSV line: `calvaryroofingtx.com,approve,yes,,,,`

## campbellext.com

| | |
|---|---|
| Website | https://www.campbellext.com/ |
| Search title | Campbell Exteriors |
| Found by query | osm:craft=roofer |
| Contact page | https://www.campbellext.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-daf65e33_inspection_2026-11-02T05-43-03-089Z.jpg)

Suggested CSV line: `campbellext.com,approve,yes,,,,`

## newimageroofing.net

| | |
|---|---|
| Website | https://www.newimageroofing.net/ |
| Search title | New Image Roofing |
| Found by query | osm:craft=roofer |
| Contact page | https://newimageroofinghtx.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/9da4aad1-46e1-4a27-b3cd-f829b0c807db/run-9da4aad1_attempt-5f9ab35e_inspection_2026-11-02T05-43-10-420Z.jpg)

Suggested CSV line: `newimageroofing.net,approve,yes,,,,`

## airproheating.com

| | |
|---|---|
| Website | https://airproheating.com/ |
| Search title | AirPro Heating and Air |
| Found by query | osm:craft=hvac |
| Contact page | https://airproheating.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-965ba45c_inspection_2026-11-02T06-16-23-632Z.jpg)

Suggested CSV line: `airproheating.com,approve,yes,,,,`

## perfectefficiency.com

| | |
|---|---|
| Website | https://www.perfectefficiency.com/ |
| Search title | Perfect Efficiency Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.perfectefficiency.com/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-35fcf554_inspection_2026-11-02T06-16-09-532Z.jpg)

Suggested CSV line: `perfectefficiency.com,approve,yes,,,,`

## gnlhvac.com

| | |
|---|---|
| Website | https://www.gnlhvac.com/ |
| Search title | GNL Heating and Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.gnlhvac.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-80e1522b_inspection_2026-11-02T06-15-54-113Z.jpg)

Suggested CSV line: `gnlhvac.com,approve,yes,,,,`

## saddlebackplumbing.com

| | |
|---|---|
| Website | https://www.saddlebackplumbing.com/ |
| Search title | Saddleback Plumbing |
| Found by query | osm:craft=hvac |
| Contact page | https://www.saddlebackplumbing.com/contact/message |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-8834751e_inspection_2026-11-02T06-16-01-329Z.jpg)

Suggested CSV line: `saddlebackplumbing.com,approve,yes,,,,`

## nationalheatandair.com

| | |
|---|---|
| Website | https://www.nationalheatandair.com/ |
| Search title | National Heating and Air Conditioning, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.nationalheatandair.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-ecaa0d4b_inspection_2026-11-02T06-16-17-024Z.jpg)

Suggested CSV line: `nationalheatandair.com,approve,yes,,,,`

## coastproducts.com

| | |
|---|---|
| Website | http://www.coastproducts.com/ |
| Search title | Coast Products |
| Found by query | osm:craft=hvac |
| Contact page | http://coastproducts.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-a1de0d36_inspection_2026-11-02T06-15-46-215Z.jpg)

Suggested CSV line: `coastproducts.com,approve,yes,,,,`

## oasiscooling.com

| | |
|---|---|
| Website | https://www.oasiscooling.com/ |
| Search title | Oasis Heating, A/C & Refrigeration |
| Found by query | osm:craft=hvac |
| Contact page | https://www.oasiscooling.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-dfdbf3b7_inspection_2026-11-02T06-17-04-770Z.jpg)

Suggested CSV line: `oasiscooling.com,approve,yes,,,,`

## cleanairactheatingandac.com

| | |
|---|---|
| Website | https://www.cleanairactheatingandac.com/ |
| Search title | The Clean Air Act |
| Found by query | osm:craft=hvac |
| Contact page | https://www.cleanairactheatingandac.com/contact-us |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-f1055301_inspection_2026-11-02T06-16-38-379Z.jpg)

Suggested CSV line: `cleanairactheatingandac.com,approve,yes,,,,`

## lovottiair.com

| | |
|---|---|
| Website | http://www.lovottiair.com/ |
| Search title | Lovotti Air |
| Found by query | osm:craft=hvac |
| Contact page | https://lovottiinc.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-21e7032d_inspection_2026-11-02T06-16-30-636Z.jpg)

Suggested CSV line: `lovottiair.com,approve,yes,,,,`

## airclassic.org

| | |
|---|---|
| Website | https://www.airclassic.org/ |
| Search title | Air Classic |
| Found by query | osm:craft=hvac |
| Contact page | https://www.airclassic.org/contact/send-message/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-e092eba8_inspection_2026-11-02T06-16-51-550Z.jpg)

Suggested CSV line: `airclassic.org,approve,yes,,,,`

## polarbearairconditioning.com

| | |
|---|---|
| Website | https://www.polarbearairconditioning.com/ |
| Search title | Polar Bear Air Conditioning & Heating Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.polarbearairconditioning.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-0a898360_inspection_2026-11-02T06-17-20-829Z.jpg)

Suggested CSV line: `polarbearairconditioning.com,approve,yes,,,,`

## fulmerheatcool.com

| | |
|---|---|
| Website | https://www.fulmerheatcool.com/ |
| Search title | Fulmer Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.fulmerheatcool.com/contact/send-message |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-fee0dede_inspection_2026-11-02T06-16-45-155Z.jpg)

Suggested CSV line: `fulmerheatcool.com,approve,yes,,,,`

## northwindhvacaz.com

| | |
|---|---|
| Website | https://www.northwindhvacaz.com/ |
| Search title | North Wind Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | https://www.northwindhvacaz.com/contact-us |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-ebf45dbf_inspection_2026-11-02T06-17-41-874Z.jpg)

Suggested CSV line: `northwindhvacaz.com,approve,yes,,,,`

## familyheatandair.com

| | |
|---|---|
| Website | https://www.familyheatandair.com/ |
| Search title | Family Heating & Air, Inc |
| Found by query | osm:craft=hvac |
| Contact page | https://familyheatandair.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-28fab878_inspection_2026-11-02T06-17-14-287Z.jpg)

Suggested CSV line: `familyheatandair.com,approve,yes,,,,`

## mrcomfortmd.com

| | |
|---|---|
| Website | https://mrcomfortmd.com/ |
| Search title | Mr. Comfort Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.mrcomfortmd.com/Contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-08f6602d_inspection_2026-11-02T06-16-58-294Z.jpg)

Suggested CSV line: `mrcomfortmd.com,approve,yes,,,,`

## command-air.com

| | |
|---|---|
| Website | http://www.command-air.com/ |
| Search title | Command A/C |
| Found by query | osm:craft=hvac |
| Contact page | https://www.commandcomfort.com/contact/send-a-message |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-db391e0e_inspection_2026-11-02T06-17-27-663Z.jpg)

Suggested CSV line: `command-air.com,approve,yes,,,,`

## russellsac.com

| | |
|---|---|
| Website | https://www.russellsac.com/ |
| Search title | Russell's Heating & Air Conditioning |
| Found by query | osm:craft=hvac |
| Contact page | https://www.russellsac.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | needs\_manual · dry-run test: failed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-a0c74d80_inspection_2026-11-02T06-17-56-887Z.jpg)

Suggested CSV line: `russellsac.com,approve,yes,,,,`

## boehmerheating.com

| | |
|---|---|
| Website | https://www.boehmerheating.com/ |
| Search title | Boehmer Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://www.boehmerheating.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-a748a2c1_inspection_2026-11-02T06-17-35-302Z.jpg)

Suggested CSV line: `boehmerheating.com,approve,yes,,,,`

## comfortflow.com

| | |
|---|---|
| Website | https://www.comfortflow.com/ |
| Search title | Comfort Flow Heating |
| Found by query | osm:craft=hvac |
| Contact page | https://www.comfortflow.com/contact/send-a-message |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/4034880e-736f-4c13-a37e-83ef29f67d9b/run-4034880e_attempt-f138df5d_inspection_2026-11-02T06-17-49-726Z.jpg)

Suggested CSV line: `comfortflow.com,approve,yes,,,,`

## jmsmithhvac.com

| | |
|---|---|
| Website | https://jmsmithhvac.com/ |
| Search title | J & M Smith Heating and Air |
| Found by query | osm:craft=hvac |
| Contact page | https://jmsmithhvac.com/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-6816c456_inspection_2026-11-02T06-58-46-101Z.jpg)

Suggested CSV line: `jmsmithhvac.com,approve,yes,,,,`

## alisonmechanical.com

| | |
|---|---|
| Website | https://www.alisonmechanical.com/ |
| Search title | Alison Mechanical Heating & Cooling |
| Found by query | osm:craft=hvac |
| Contact page | https://alisonmechanical.com/contact-us/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-30e663e8_inspection_2026-11-02T06-58-52-605Z.jpg)

Suggested CSV line: `alisonmechanical.com,approve,yes,,,,`

## solutionsmechanical.co

| | |
|---|---|
| Website | https://www.solutionsmechanical.co/ |
| Search title | Solutions Mechanical LLC |
| Found by query | osm:craft=hvac |
| Contact page | https://solutionsmechanical.co/contact/ |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-a7190924_inspection_2026-11-02T06-58-39-481Z.jpg)

Suggested CSV line: `solutionsmechanical.co,approve,yes,,,,`

## vonsaselectric.com

| | |
|---|---|
| Website | http://vonsaselectric.com/ |
| Search title | Harry M. Von Sas & Son |
| Found by query | osm:craft=hvac |
| Contact page | http://vonsaselectric.com/contact.html |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-f33487c4_inspection_2026-11-02T06-59-25-431Z.jpg)

Suggested CSV line: `vonsaselectric.com,approve,yes,,,,`

## hasservs.com

| | |
|---|---|
| Website | https://www.hasservs.com/ |
| Search title | HAS Services |
| Found by query | osm:craft=hvac |
| Contact page | https://www.hasservs.com/contact-us |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-dc416e4e_inspection_2026-11-02T06-58-58-876Z.jpg)

Suggested CSV line: `hasservs.com,approve,yes,,,,`

## clarkmechanicalinc.com

| | |
|---|---|
| Website | https://www.clarkmechanicalinc.com/ |
| Search title | Clark Mechanical Services |
| Found by query | osm:craft=hvac |
| Contact page | https://www.clarkmechanicalinc.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-91a49f60_inspection_2026-11-02T06-59-07-408Z.jpg)

Suggested CSV line: `clarkmechanicalinc.com,approve,yes,,,,`

## alliant-systems.com

| | |
|---|---|
| Website | https://www.alliant-systems.com/ |
| Search title | Alliant Systems |
| Found by query | osm:craft=hvac |
| Contact page | https://www.alliant-systems.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-b9a9a01d_inspection_2026-11-02T06-59-15-158Z.jpg)

Suggested CSV line: `alliant-systems.com,approve,yes,,,,`

## earlbryant.com

| | |
|---|---|
| Website | https://www.earlbryant.com/ |
| Search title | Earl Bryant Enterprises, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.earlbryant.com/contact-3 |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-1f04763e_inspection_2026-11-02T06-59-47-568Z.jpg)

Suggested CSV line: `earlbryant.com,approve,yes,,,,`

## completeairandheat.com

| | |
|---|---|
| Website | https://www.completeairandheat.com/ |
| Search title | Complete Air & Heat, Inc. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.completeairandheat.com/contact/schedule-service |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-19fe3b9e_inspection_2026-11-02T06-59-39-948Z.jpg)

Suggested CSV line: `completeairandheat.com,approve,yes,,,,`

## totalairep.com

| | |
|---|---|
| Website | https://totalairep.com/ |
| Search title | Total Air |
| Found by query | osm:craft=hvac |
| Contact page | https://totalairep.com/contact |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-6311249c_inspection_2026-11-02T06-59-54-762Z.jpg)

Suggested CSV line: `totalairep.com,approve,yes,,,,`

## apexmech.net

| | |
|---|---|
| Website | http://www.apexmech.net/ |
| Search title | Apex Mechanical |
| Found by query | osm:craft=hvac |
| Contact page | http://www.apexmech.net/contact.php |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-b15c91e9_inspection_2026-11-02T07-00-01-782Z.jpg)

Suggested CSV line: `apexmech.net,approve,yes,,,,`

## adamshvac.net

| | |
|---|---|
| Website | https://www.adamshvac.net/ |
| Search title | Adams Heating Supply Co. |
| Found by query | osm:craft=hvac |
| Contact page | https://www.adamshvac.net/contact-us |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: quote request
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-116d5380_inspection_2026-11-02T06-59-32-923Z.jpg)

Suggested CSV line: `adamshvac.net,approve,yes,,,,`

## ambientairsolutions.com

| | |
|---|---|
| Website | https://www.ambientairsolutions.com/ |
| Search title | Ambient Air Solutions |
| Found by query | osm:craft=hvac |
| Contact page | https://www.ambientairsolutions.com/contact/send-a-message |
| Review | **approved** |
| Inspection | inspected |
| Form adapter | approved · dry-run test: passed |

Suitability notes:

~~~text
Search country: US
Form purpose: general enquiry
~~~

![Inspected page](../evidence/campaigns/2eb4fb01-c6fe-4def-b94d-a8aa0338e2dd/runs/a7e8612f-3c85-43de-b27d-9634737f5cff/run-a7e8612f_attempt-a2d8e1d6_inspection_2026-11-02T07-00-09-509Z.jpg)

Suggested CSV line: `ambientairsolutions.com,approve,yes,,,,`

