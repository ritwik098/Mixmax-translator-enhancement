# Mixmax-translator-enhancement

In order to run the Mixmax translator enhancement follow these steps:

1. Git clone https://github.com/ritwik098/Mixmax-translator-enhancement.git
2. Run npm install
3. Run node translate.js (It is the main server file)
4. Verify it works by visiting http://localhost:8080/editor in your browser.
5. Open up the [Mixmax Dashboard], click Settings -> Integrations -> Add Enhancement.
6. Enter the following for the inputs:
> Name = Translator
>
> Icon Tooltip = My Giphy Picker
>
> Editor URL = http://localhost:8080/editor
>
> Resolver API URL = http://localhost:8080/api/resolver
>
> leave Activate API URL blank

7. Refresh Gmail with Mixmax installed. Click Compose and hover over the Enhance menu. You should see the Translators enhancement at the top. Note that you might need to restart Chrome in "insecure" mode for local testing - see instructions [here].

[Mixmax Dashboard]: <https://app.mixmax.com/dashboard/>
[here]: <http://developer.mixmax.com/docs/variables-in-templates#insecure-content-https-request-blocked-when-develo>
