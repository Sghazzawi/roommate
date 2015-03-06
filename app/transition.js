export default function(){
  this.transition(
    this.fromRoute('bills'),
    this.toRoute('bills.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
