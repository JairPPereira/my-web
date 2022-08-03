import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Porcategoria from './components/pages/Porcategoria';
import TVs from './components/pages/TVs';
import Acao from './components/pages/Acao';
import Comedia from './components/pages/Comedia';
import A2067 from './components/pages/2067';
import Radios from './components/pages/Radios';
import Ficcao from './components/pages/Ficcao';
import Romance from './components/pages/Romance';
import Acertodecontas from "./components/pages/Acertodecontas";
import Aparelhagens from "./components/pages/Aparelhagens";
import Atualidade from './components/pages/Atualidade';
import Diario from './components/pages/Diario';
import Daaz from './components/pages/Daaz';
import Graopara from './components/pages/Graopara';
import Boasnovas from './components/pages/Boasnovas';
import Fmodia from './components/pages/Fmodia';
import Aformadaagua from './components/pages/Aformadaagua';
import Rba from './components/pages/Rba';
import Recordnews from './components/pages/Recordnews';
import Sbt from './components/pages/Sbt';
import Agoraestamossos from './components/pages/Agoraestamossos';
import Assasinatosdopassado from './components/pages/Assasinatosdopassado';
import Airplanevsvolcano from './components/pages/Airplanevsvolcano';
import Ajusticeira from './components/pages/Ajusticeira';
import Albertnobbs from './components/pages/Albertnobbs';
import Alemdohorizonte from './components/pages/Alemdohorizonte';
import Alendadjj from './components/pages/Alendadjj';
import Amorzumbi from './components/pages/Amorzumbi';
import Anjosdanoite from './components/pages/Anjosdanoite';
import Anovaondadoimperador from './components/pages/Anovaondadoimperador';
import Aqualquerpreco from './components/pages/Aqualquerpreco';
import Assasinosdealuguel from './components/pages/Assasinosdealuguel';
import Batalhadosimperios from './components/pages/Batalhadosimperios';
import Bloodrayne3 from './components/pages/Bloodrayne3';
import Cacadoresderecompensas from './components/pages/Cacadoresderecompensas';
import Cargaexplosiva3 from './components/pages/Cargaexplosiva3';
import Chef from './components/pages/Chef';
import Codigodeconduta from './components/pages/Codigodeconduta';
import Coragemparaamar from './components/pages/Coragemparaamar';
import Cosmopolis from './components/pages/Cosmopolis';
import Criatura from './components/pages/Criatura';
import Cubo from './components/pages/Cubo';
import Distrito13o from './components/pages/Distrito13o';
import Duna from './components/pages/Duna';
import Embuscadevinganca from './components/pages/Embuscadevinganca';
import Entreirmaos from './components/pages/Entreirmaos';
import Entreoamoreafama from './components/pages/Entreoamoreafama';
import Finch from './components/pages/Finch';
import Ghostland from './components/pages/Ghostland';
import Homemaranha from './components/pages/Homemaranha';
import Hoteldosdinossauros from './components/pages/Hoteldosdinossauros';
import Jesuskid from './components/pages/Jesuskid';
import Mariasangrenta from './components/pages/Mariasangrenta';
import Megalodon from './components/pages/Megalodon';
import Minhamaeeumaviagem from './components/pages/Minhamaeeumaviagem';
import Necroterio from './components/pages/Necroterio';
import Ninja from './components/pages/Ninja';
import Ocaminho from './components/pages/Ocaminho';
import Ocladasadagas from './components/pages/Ocladasadagas';
import Ocontodoscontos from './components/pages/Ocontodoscontos';
import Odespertar from './components/pages/Odespertar';
import Ohomemdamafia from './components/pages/Ohomemdamafia';
import Oimbativelreden from './components/pages/Oimbativelreden';
import Olhosfamintos from './components/pages/Olhosfamintos';
import Oparamo from './components/pages/Oparamo';
import Ospecialistas from './components/pages/Osespecialistas';
import Tophits from './components/pages/Tophits';
import Videoclips from './components/pages/Vdeoclips';
import Osmercenarios2 from './components/pages/Osmercenarios2';
import Psicopataamericano2 from './components/pages/Psicopataamericano2';
import Re1sident from './components/pages/Re1sident';
import Residentevilbem from './components/pages/Residentevilbem';
import Redencao from './components/pages/Redencao';
import Relacaoexplosiva from './components/pages/Relacaoexplosiva';
import Ruslan from './components/pages/Ruslan';
import Sextafeira13 from './components/pages/Sextafeira13';
import Sonic from './components/pages/Sonic';
import Tempo from './components/pages/Tempo';
import Umamorprarecordar from './components/pages/Umamorprarecordar';
import Ummatchsurpresa from './components/pages/Ummatchsurpresa';
import Ummotoristaemapuros from './components/pages/Ummotoristaemapuros';
import Umnegocioderisco from './components/pages/Umnegocioderisco';
import Umpobretaoncsb from './components/pages/Umpobretaoncsb';
import Ascensaoeqdui from './components/pages/Ascensaoeqdui';
import Homemaranha2 from './components/pages/Homemaranha2';
import Supermurali from './components/pages/Supermurali';
import Terror from './components/pages/Terror';
import Suspense from './components/pages/Suspense';
import Stretfp from './components/pages/Stretfp';
import Codinome7 from './components/pages/Codinome7';
import Umjovememapuros from './components/pages/Umjovememapuros';
import Tudopraficarcomela from './components/pages/Tudopraficarcomela';
import Odoadordememorias from './components/pages/Odoadordememorias';
import Atumbadodiabo from './components/pages/Atumbadodiabo';
import Jogandocomoamor from './components/pages/Jogandocomoamor';
import Loucamenteapaixonados from './components/pages/Loucamenteapaixonados';
import Cadaveresardm from './components/pages/Cadaveresardm';
import Agentesduplos from './components/pages/Agentesduplos';
import Aslaminasdje from './components/pages/Aslaminasdje';
import Ogritodamorte from './components/pages/Ogritodamorte';
import Drama from './components/pages/Drama';
import Kv1 from './components/pages/Kv1';
import Osorrisodelaura from './components/pages/Osorrisodelaura';
import Ocomitedd from './components/pages/Ocomitedd';
import Fundingyou from './components/pages/Fundingyou';
import Teste from './components/pages/Teste';
import Fungindodopassado from './components/pages/Fugindodopassado';
import Atravessia from './components/pages/Atravessia';
import Aturmadamonica from './components/pages/Aturmadamonica';
import Series from './components/pages/Series';
import Playlistyou from './components/pages/Playlistyou';
import Playcda from './components/pages/Playcda';
import Playclass from './components/pages/Playclass';
import Magali from './components/pages/Magali';
import Monica from './components/pages/Monica';
import Cebolinha from './components/pages/Cebolinha';
import Playnetmovie from './components/pages/Playnetmovie';
import Cascao from './components/pages/Cascao';
import Milena from './components/pages/Milena';
import Perfeicao from './components/pages/Perfeicao';
import Segredo from './components/pages/Segredo';
import Lama from './components/pages/Lama';
import Asvampiras from './components/pages/Asvampiras';
import Pagandobqmt from './components/pages/Pagandobqmt';
import Aventura from './components/pages/Aventura';
import Gossebump2 from './components/pages/Gossebump2';
import Aeradogelo2 from './components/pages/Aeradogelo2';
import Tresninjas from './components/pages/Tresninjas';
import Ocavaleirod from './components/pages/Ocavaleirod';
import Boltsc from './components/pages/Boltsc';
import Gatodebotas from './components/pages/Gatodebotas';
import Zero7cr from './components/pages/Zero7cr';
import Pedrocoelho2 from './components/pages/Pedrocoelho2';
import Eternos from './components/pages/Eternos';
import Apenasus from './components/pages/Apenasus';
import Operacoese from './components/pages/Operacoese';
import Momentum from './components/pages/Momentum';
import Trovao from './components/pages/Trovao';
import Pokemon from './components/pages/Pokemon';
import Centauro from './components/pages/Centauro';
import Sereia2 from './components/pages/Sereia2';
import Scooby from './components/pages/Scooby';
import Reileao from './components/pages/Reileao';
import Afilhadorei from './components/pages/Afilhadorei';
import Otrapaceiro from './components/pages/Otrapaceiro';
import Deencontrosam from './components/pages/Deencontrosam';
import Acasadomedo from './components/pages/Acasadomedo';
import Details from './components/pages/det';





function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/porcategoria' component={Porcategoria} />
        <Route path='/daaz' component={Daaz} />
        <Route path='/tvs' component={TVs} />
        <Route path='/radios' component={Radios} />
        <Route path='/acao' component={Acao} />
        <Route path='/comedia' component={Comedia} />
        <Route path='/528085' component={A2067} />
        <Route path='/ficcao' component={Ficcao} />
        <Route path='/romance' component={Romance} />
        <Route path='/91333' component={Acertodecontas} />
        <Route path='/aparelhagens' component={Aparelhagens} />
        <Route path='/atualidade' component={Atualidade} />
        <Route path='/diario' component={Diario} />
        <Route path='/graopara' component={Graopara} />
        <Route path='/boasnovas' component={Boasnovas} />
        <Route path='/fmodia' component={Fmodia} />
        <Route path='/399055' component={Aformadaagua} />
        <Route path='/rba' component={Rba} />
        <Route path='/recordnews' component={Recordnews} />
        <Route path='/sbt' component={Sbt} />
        <Route path='/451877' component={Agoraestamossos} />
        <Route path='/191137' component={Assasinatosdopassado} />
        <Route path='/258210' component={Airplanevsvolcano} />
        <Route path='/ajusticeira' component={Ajusticeira} />
        <Route path='/albertnobbs' component={Albertnobbs} />
        <Route path='/alemdohorizonte' component={Alemdohorizonte} />
        <Route path='/alendadjj' component={Alendadjj} />
        <Route path='/amorzumbi' component={Amorzumbi} />
        <Route path='/anjosdanoite' component={Anjosdanoite} />
        <Route path='/anovaondadoimperador' component={Anovaondadoimperador} />
        <Route path='/aqualquerpreco' component={Aqualquerpreco} />
        <Route path='/assasinosdealuguel' component={Assasinosdealuguel} />
        <Route path='/batalhadosimperios' component={Batalhadosimperios} />
        <Route path='/bloodrayne3' component={Bloodrayne3} />
        <Route path='/cargaexplosiva3' component={Cargaexplosiva3} />
        <Route path='/cacadoresderecompensas' component={Cacadoresderecompensas} />
        <Route path='/chef' component={Chef} />
        <Route path='/codigodeconduta' component={Codigodeconduta} />
        <Route path='/coragemparaamar' component={Coragemparaamar} />
        <Route path='/cosmopolis' component={Cosmopolis} />
        <Route path='/criatura' component={Criatura} />
        <Route path='/cubo' component={Cubo} />
        <Route path='/distrito13o' component={Distrito13o} />
        <Route path='/duna' component={Duna} />
        <Route path='/embuscadevinganca' component={Embuscadevinganca} />
        <Route path='/entreirmaos' component={Entreirmaos} />
        <Route path='/entreoamoreafama' component={Entreoamoreafama} />
        <Route path='/finch' component={Finch} />
        <Route path='/ghostland' component={Ghostland} />
        <Route path='/homemaranha' component={Homemaranha} />
        <Route path='/hoteldosdinossauros' component={Hoteldosdinossauros} />
        <Route path='/Jesuskid' component={Jesuskid} />
        <Route path='/mariasangrenta' component={Mariasangrenta} />
        <Route path='/megalodon' component={Megalodon} />
        <Route path='/minhamaeeumaviagem' component={Minhamaeeumaviagem} />
        <Route path='/necroterio' component={Necroterio} />
        <Route path='/ninja' component={Ninja} />
        <Route path='/ocaminho' component={Ocaminho} />
        <Route path='/ocladasadagas' component={Ocladasadagas} />
        <Route path='/ocontodoscontos' component={Ocontodoscontos} />
        <Route path='/odespertar' component={Odespertar} />
        <Route path='/ohomemdamafia' component={Ohomemdamafia} />
        <Route path='/olhosfamintos' component={Olhosfamintos} />
        <Route path='/oimbativelreden' component={Oimbativelreden} />
        <Route path='/oparamo' component={Oparamo} />
        <Route path='/osespecialistas' component={Ospecialistas} />
        <Route path='/tophits' component={Tophits} />
        <Route path='/vdeoclips' component={Videoclips} />
        <Route path='/osmercenarios2' component={Osmercenarios2} />
        <Route path='/psicopataamericano2' component={Psicopataamericano2} />
        <Route path='/re1sident' component={Re1sident} />
        <Route path='/residentevilbem' component={Residentevilbem} />
        <Route path='/redencao' component={Redencao} />
        <Route path='/relacaoexplosiva' component={Relacaoexplosiva} />
        <Route path='/ruslan' component={Ruslan} />
        <Route path='/sextafeira13' component={Sextafeira13} />
        <Route path='/454626' component={Sonic} />
        <Route path='/tempo' component={Tempo} />
        <Route path='/umamorprarecordar' component={Umamorprarecordar} />
        <Route path='/ummatchsurpresa' component={Ummatchsurpresa} />
        <Route path='/ummotoristaemapuros' component={Ummotoristaemapuros} />
        <Route path='/umnegocioderisco' component={Umnegocioderisco} />
        <Route path='/umpobretaoncsb' component={Umpobretaoncsb} />
        <Route path='/ascensaoeqdui' component={Ascensaoeqdui} />
        <Route path='/homemaranha2' component={Homemaranha2} />
        <Route path='/supermurali' component={Supermurali} />
        <Route path='/terror' component={Terror} />
        <Route path='/suspense' component={Suspense} />
        <Route path='/stretfp' component={Stretfp} />
        <Route path='/codinome7' component={Codinome7} />
        <Route path='/umjovememapuros' component={Umjovememapuros} />
        <Route path='/tudopraficarcomela' component={Tudopraficarcomela} />
        <Route path='/odoadordememorias' component={Odoadordememorias} />
        <Route path='/atumbadodiabo' component={Atumbadodiabo} />
        <Route path='/jogandocomoamor' component={Jogandocomoamor} />
        <Route path='/loucamenteapaixonados' component={Loucamenteapaixonados} />
        <Route path='/cadaveresardm' component={Cadaveresardm} />
        <Route path='/505579' component={Agentesduplos} />
        <Route path='/aslaminasdje' component={Aslaminasdje} />
        <Route path='/ogritodamorte' component={Ogritodamorte} />
        <Route path='/drama' component={Drama} />
        <Route path='/kv1' component={Kv1} />
        <Route path='/osorrisodelaura' component={Osorrisodelaura} />
        <Route path='/ocomitedd' component={Ocomitedd} />
        <Route path='/fudingyou' component={Fundingyou} />
        <Route path='/test' component={Teste} />
        <Route path='/fugindodopassado' component={Fungindodopassado} />
        <Route path='/atravessia' component={Atravessia} />
        <Route path='/aturmadamonica' component={Aturmadamonica} />
        <Route path='/series' component={Series} />
        <Route path='/playlistyou' component={Playlistyou} />
        <Route path='/playcda' component={Playcda} />
        <Route path='/playclass' component={Playclass} />
        <Route path='/magali' component={Magali} />
        <Route path='/monica' component={Monica} />
        <Route path='/cebolinha' component={Cebolinha} />
        <Route path='/playnetmovie' component={Playnetmovie} />
        <Route path='/cascao' component={Cascao} />
        <Route path='/milena' component={Milena} />
        <Route path='/perfeicao' component={Perfeicao} />
        <Route path='/segredo' component={Segredo} />
        <Route path='/lama' component={Lama} />
        <Route path='/asvampiras' component={Asvampiras} />
        <Route path='/pagandobqmt' component={Pagandobqmt} />
        <Route path='/aventura' component={Aventura} />
        <Route path='/gossebump2' component={Gossebump2} />
        <Route path='/950' component={Aeradogelo2} />
        <Route path='/tresninjas' component={Tresninjas} />
        <Route path='/ocavaleirod' component={Ocavaleirod} />
        <Route path='/boltsc' component={Boltsc} />
        <Route path='/gatodebotas' component={Gatodebotas} />
        <Route path='/zero7cr' component={Zero7cr} />
        <Route path='/pedrocoelho2' component={Pedrocoelho2} />
        <Route path='/eternos' component={Eternos} />
        <Route path='/apenasus' component={Apenasus} />
        <Route path='/operacoese' component={Operacoese} />
        <Route path='/momentum' component={Momentum} />
        <Route path='/trovao' component={Trovao} />
        <Route path='/pokemon' component={Pokemon} />
        <Route path='/centauro' component={Centauro} />
        <Route path='/sereia2' component={Sereia2} />
        <Route path='/scooby' component={Scooby} />
        <Route path='/reileao' component={Reileao} />
        <Route path='/245842' component={Afilhadorei} />
        <Route path='/otrapaceiro' component={Otrapaceiro} />
        <Route path='/deencontrosam' component={Deencontrosam} />
        <Route path='/322518' component={Acasadomedo} />
        <Route path='/det' component={Details} />
      

        




        


        
      </Switch>

    </Router>
    
  );
}

export default App;
